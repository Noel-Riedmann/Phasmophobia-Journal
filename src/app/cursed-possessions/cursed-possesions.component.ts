import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cursed-possesions',
  templateUrl: './cursed-possesions.component.html',
  styleUrls: ['./cursed-possesions.component.css']
})
export class CursedPossesionsComponent {
  constructor(private router: Router, private meta: Meta) { }

  goTo(location: string): void {
    this.router.navigate(['cursed-possessions/tarot-cards']);
  }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Explore the cursed possessions in Phasmophobia. Learn about haunted mirrors, monkey paws, music boxes, Ouija boards, summoning circles, tarot cards, and voodoo dolls. Discover their effects and uses in the game.' });
  }

}
