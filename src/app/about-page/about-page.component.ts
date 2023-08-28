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
    this.meta.addTag({ name: 'description', content: 'Embark on a journey into the supernatural with the Phasmophobia Journal. Your ultimate guide to the paranormal, crafted by Noel, offering comprehensive insights into ghost hunting, cursed possessions, and the enigmatic world of Phasmophobia. Delve into ghost histories, unravel cursed item mysteries, and gain tailored investigation tools. Join our fearless community and let the Phasmophobia Journal be your compass in the unknown. Explore now!' });
  }

}


