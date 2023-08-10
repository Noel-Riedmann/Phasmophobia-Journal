import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Explore the eerie realm of the Phasmophobia Journal, your definitive guide to the paranormal. Discover secrets of Phasmophobia, comprehensive ghost encyclopedia, tailored investigation tools, and more. Join our community and embark on a journey into the supernatural.' });
  }

}


