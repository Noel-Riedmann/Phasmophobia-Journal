import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursed-hunt',
  templateUrl: './cursed-hunt.component.html',
  styleUrls: ['./cursed-hunt.component.css']
})
export class CursedHuntComponent {
  constructor(private router: Router, private meta: Meta) {}
  goBack(){
    window.history.back();
  }
}
