import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-box',
  templateUrl: './music-box.component.html',
  styleUrls: ['./music-box.component.css']
})
export class MusicBoxComponent {
  constructor(private router: Router, private meta: Meta) {}
  goBack(){
    window.history.back();
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.meta.addTag({
      name: 'description',
      content: 'Dive into the eerie world of the Music Box in Haunted-Mirror. Learn how to activate and utilize the music box in your ghost investigations. Discover how the music box broadcasts the ghost\'s presence, its effects during a ghost event, and the mechanics of cursed and normal hunts triggered by the music box. Understand the impact of being near an active music box on player sanity. Explore the mysteries of the music box and its crucial role in Phasmophobia gameplay.'
    });
  }
}
