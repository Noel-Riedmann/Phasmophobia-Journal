import { Component } from '@angular/core';

@Component({
  selector: 'app-metronome',
  template: '',
})
export class MetronomeComponent {
  private snd: HTMLAudioElement[] = [];

  private speed = 1.7;
  private tempo = 115;
  private volume = 0.5;
  private running = false;
  private start = Date.now();
  private sndChoice = 0;
  private offset = 0;

  private lastId = '';

  constructor() {
    this.snd = [
      new Audio('https://zero-network.net/phasmophobia/static/assets/footstep.wav'),
    ];
    this.snd[0].preload = 'auto';
    this.snd[0].load();
  }

  toggleSound(setTempo: number, id: string): void {
    this.speed = setTempo;
    if (this.lastId !== id) {
      this.lastId = id;
      this.tempo = Math.ceil(((9.6 * Math.pow(this.speed, 2)) + (45.341 * this.speed) + 9.5862)) * (1 + (this.offset / 100));
      this.start = Date.now();
      if (!this.running) {
        this.startMetronome();
      }
    } else if (!this.running) {
      this.tempo = Math.ceil(((9.6 * Math.pow(this.speed, 2)) + (45.341 * this.speed) + 9.5862)) * (1 + (this.offset / 100));
      this.start = Date.now();
      if (!this.running) {
        this.startMetronome();
      }
    } else {
      this.start = Date.now() - 6000;
    }
  }



  setTempo(): void {
    this.tempo = Math.ceil(((9.6 * Math.pow(this.speed, 2)) + (45.341 * this.speed) + 9.5862)) * (1 + (this.offset / 100));
  }

  setVolume(): void {
    // later
  }

  startMetronome(): void {
    this.running = true;
    const interval = 1000 / (this.tempo / 60);
    const footstep = this.snd[0].cloneNode() as HTMLAudioElement;
    footstep.volume = this.volume;
    footstep.play();
    setTimeout(this.step.bind(this), interval);
  }

  private step(): void {
    if (Date.now() - this.start <= 5000) {
      const interval = 1000 / (this.tempo / 60);
      const footstep = this.snd[0].cloneNode() as HTMLAudioElement;
      footstep.volume = this.volume;
      footstep.play();
      setTimeout(this.step.bind(this), interval);
    } else {
      this.running = false;
    }
  }
}
