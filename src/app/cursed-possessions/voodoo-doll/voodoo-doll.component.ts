import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voodoo-doll',
  templateUrl: './voodoo-doll.component.html',
  styleUrls: ['./voodoo-doll.component.css']
})
export class VoodooDollComponent {
  constructor(private router: Router, private meta: Meta) {}
  goBack(){
    window.history.back();
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.meta.addTag({
      name: 'description',
      content: 'Explore the mystique of the Voodoo Doll in Haunted-Mirror. Understand the mechanics of interacting with the voodoo doll, causing random pins to be pushed into it and triggering ghost interactions. Discover the effects on player sanity and the different outcomes based on pin interactions. Learn how the Voodoo Doll can influence ghost behavior, lead to cursed hunts, and impact the gameplay in Phasmophobia.'
    });
  }

}
