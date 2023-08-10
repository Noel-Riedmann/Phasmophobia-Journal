import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monkey-paw',
  templateUrl: './monkey-paw.component.html',
  styleUrls: ['./monkey-paw.component.css']
})
export class MonkeyPawComponent {
  constructor(private router: Router, private meta: Meta) {}
  goBack(){
    window.history.back();
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.meta.addTag({
      name: 'description',
      content: 'Explore the mysterious powers of the Monkey Paw in Haunted-Mirror. Learn about its wish-granting mechanics and effects based on difficulty reward multipliers. Discover the ways to make wishes through voice chat or a text-based UI. Find wishes scattered in Sunny Meadows, record them in the journal, and understand the unique effects of each wish. Uncover the categories of wishes, their effects, and their locations. Delve into the world of the Monkey Paw and its gameplay implications.'
    });
  }

}
