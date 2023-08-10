import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summoning-circle',
  templateUrl: './summoning-circle.component.html',
  styleUrls: ['./summoning-circle.component.css']
})
export class SummoningCircleComponent {
  constructor(private router: Router, private meta: Meta) {}
  goBack(){
    window.history.back();
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.meta.addTag({
      name: 'description',
      content: 'Unveil the secrets of the Summoning Circle in Haunted-Mirror. Discover how to activate the circle by lighting five red candles with a lighter. Understand the sanity deductions for nearby players as each candle is lit and the potential outcomes of extinguished candles. Delve into the summoning process and the moment the ghost is fully materialized, initiating a cursed hunt. Learn about the unique mechanics of the Summoning Circle and its impact on gameplay in Phasmophobia.'
    });
  }
}
