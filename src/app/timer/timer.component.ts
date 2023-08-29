import { Component, Input, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { CustomTimestamp } from '../identification-tools/identification-tools.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  @Input() totalDuration!: number; // Duration in seconds
  @Input() timestamps: CustomTimestamp<number>[] = [];
  @Output() timerFinished = new EventEmitter<void>();

  timePassed: number = 0;
  remainingTime: number = 0;
  progress: number = 0;
  isTimerRunning: boolean = false;
  timerSubscription: Subscription | undefined;

  toggleTimer() {
    if (!this.isTimerRunning) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer() {
    this.isTimerRunning = true;
    this.remainingTime = this.totalDuration * 1000;
    this.progress = 0;

    this.timerSubscription = interval(10)
      .pipe(
        take(Math.ceil(this.remainingTime / 10)),
        tap(() => {
          this.remainingTime -= 10;
          this.timePassed += 10;
          this.progress = ((this.totalDuration * 1000 - this.remainingTime) / (this.totalDuration * 1000)) * 100;

          if (this.remainingTime <= 0) {
            this.timerFinished.emit();
            this.stopTimer();
          }
        })
      )
      .subscribe();
  }

  stopTimer() {
    this.isTimerRunning = false;
    this.remainingTime = 0;
    this.timePassed = 0;
    this.progress = 0;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  formatTime(time: number): string {
    const milliseconds = time % 1000;
    const totalSeconds = Math.floor(time / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);

    const roundedMilliseconds = Math.round(milliseconds / 10);

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${roundedMilliseconds.toString().padStart(2, '0')}`;
    return formattedTime;
  }
}
