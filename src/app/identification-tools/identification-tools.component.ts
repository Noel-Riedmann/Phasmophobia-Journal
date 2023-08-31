import { Component } from '@angular/core';

export interface CustomTimestamp<T> {
  time: number;
  position: T;
  label: string;
}

@Component({
  selector: 'app-identification-tools',
  templateUrl: './identification-tools.component.html',
  styleUrls: ['./identification-tools.component.scss']
})
export class IdentificationToolsComponent {
  totalDurationSmudge = 180;
  smudgeTimestamps: CustomTimestamp<number>[] = [
    { time: 60, position: (60 / this.totalDurationSmudge) * 100, label: 'Demon' },
    { time: 90, position: (90 / this.totalDurationSmudge) * 100, label: 'Normal' },
    { time: 180, position: (180 / this.totalDurationSmudge) * 100, label: 'Spirit' }
  ];

  totalDurationHunt = 25;
  huntTimestamps: CustomTimestamp<number>[] = [
    { time: 20, position: (20 / this.totalDurationHunt) * 100, label: 'Demon' },
    { time: 25, position: (25 / this.totalDurationHunt) * 100, label: 'Normal' }
  ];

  smudgeTimePassed: number = 0;
  huntTimePassed: number = 0;
  ngZone: any;

  stopSmudgeTimer() {
    this.smudgeTimePassed = 0;
  }

  stopHuntTimer() {
    this.huntTimePassed = 0;
  }

  private audio: HTMLAudioElement = new Audio("assets/sounds/footstep.wav");
  speed: number = 1.7;
  playing: boolean = false;
  tempo = 115;
  volume = 0.5;
  running = false;
  currentGhostInfo = 'Other';

  constructor() {
    this.audio.preload = 'auto';
    this.audio.load();
    this.updateVolume();
    this.loadVolumeSetting();
  }

  loadVolumeSetting() {
    const storedVolume = localStorage.getItem('volume');
    if (storedVolume !== null) {
      this.volume = parseFloat(storedVolume);
    } else {
      this.volume = 0.5;
    }
  }
  updateSpeed(speed: number) {
    this.speed = speed;



  }

  playSound(setTempo: number): void {
    if (!this.playing) {
      this.playing = true;
      this.speed = setTempo;
      this.step();
    }
    else if (this.playing) {
      this.playing = false;
    }
  }


  updateVolume() {
    this.audio.volume = this.volume / 100;
    localStorage.setItem('volume', this.volume.toString());
  }

  private step(): void {
    this.tempo = Math.ceil(((9.6 * Math.pow(this.speed, 2)) + (45.341 * this.speed) + 9.5862));
    const interval = 1000 / (this.tempo / 60);
    const footstep = this.audio.cloneNode() as HTMLAudioElement;
    footstep.volume = this.volume;
    if (this.playing) {
      footstep.play();
      setTimeout(this.step.bind(this), interval);
    }
  }

  autoscroll(){
    if (window.innerWidth < 1380) {
      setTimeout(() => {
        window.scrollTo(99999, 99999)
      },
        10);
    }
  }
}


