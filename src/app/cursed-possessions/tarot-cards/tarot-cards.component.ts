import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarot-cards',
  templateUrl: './tarot-cards.component.html',
  styleUrls: ['./tarot-cards.component.css']
})
export class TarotCardsComponent {
  constructor(private router: Router) {}
  goBack(){
    this.router.navigate(['cursed-possessions']);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
