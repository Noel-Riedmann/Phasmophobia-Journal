import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { Input, Output, EventEmitter } from '@angular/core';


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

  volume: number = 50;
  audio: HTMLAudioElement = new Audio();
  constructor() {

    this.updateVolume();
  }
  speed: number = 2;
  playing: boolean = false;
  playSound() {
    if (this.playing) {
      this.playing = false;
      this.audio.loop = false;
    }
    else {
      this.playing = true;
      this.audio.src = "assets/sounds/footstep.wav";
      this.audio.load();
      this.audio.loop = true;
      this.audio.playbackRate = this.speed;
      this.audio.play();
    }
  }

  updateVolume() {
    this.audio.volume = this.volume / 100;
  }

  SpeedInMS: number = this.speed * 0.85;;
  calculateSpeed(speed: number){
     this.SpeedInMS = Math.round(speed * 0.85 * 100)/100;
     this.audio.playbackRate = this.speed;
  }
}
