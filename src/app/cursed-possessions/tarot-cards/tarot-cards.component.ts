import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarot-cards',
  templateUrl: './tarot-cards.component.html',
  styleUrls: ['./tarot-cards.component.css']
})
export class TarotCardsComponent {
  constructor(private router: Router, private meta: Meta) {}
  goBack(){
    window.history.back();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.meta.addTag({ name: 'description', content: 'Explore the effects and details of tarot cards in Phasmophobia. Learn about The Tower, The Wheel of Fortune, The Fool, The Devil, Death, The Hermit, The Sun, The Moon, The High Priestess, and The Hanged Man. Discover how each card affects gameplay.' });

  }
}
