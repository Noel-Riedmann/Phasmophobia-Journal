import { Component, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private meta: Meta,  private renderer: Renderer2) { }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Phasmophobia Journal: Ghost details, cursed possessions, and more' });
  }
}
