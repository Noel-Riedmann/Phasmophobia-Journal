import { Component, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
  constructor(private meta: Meta,  private renderer: Renderer2) { }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'The fast way to learn about Ghosts, Cursed Possesions and much more.' });
  }
}
