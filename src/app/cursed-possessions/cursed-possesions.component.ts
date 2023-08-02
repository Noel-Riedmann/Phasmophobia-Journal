import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cursed-possesions',
  templateUrl: './cursed-possesions.component.html',
  styleUrls: ['./cursed-possesions.component.css']
})
export class CursedPossesionsComponent {
  constructor(private router: Router) { }

  goTo(location: string): void {
    this.router.navigate(['cursed-possesions/tarot-cards']);
  }

}
