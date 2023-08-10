import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-haunted-mirror',
  templateUrl: './haunted-mirror.component.html',
  styleUrls: ['./haunted-mirror.component.css']
})
export class HauntedMirrorComponent {
  constructor(private router: Router, private meta: Meta) {}
  goBack(){
    window.history.back();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.meta.addTag({
      name: 'description',
      content: 'Discover the mechanics and effects of the haunted mirror in Haunted-Mirror. Learn how to toggle the mirror, view a live feed of the favorite room, and locate the room using the panorama. Understand the sanity drain rate, cracked mirror consequences, and the initiation of a cursed hunt. Explore the haunted mirror gameplay.'
    });
  }

}
