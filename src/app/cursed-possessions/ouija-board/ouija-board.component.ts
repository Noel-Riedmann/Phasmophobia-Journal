import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ouija-board',
  templateUrl: './ouija-board.component.html',
  styleUrls: ['./ouija-board.component.css']
})
export class OuijaBoardComponent {
  constructor(private router: Router, private meta: Meta) {}
  goBack(){
    window.history.back();
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.meta.addTag({
      name: 'description',
      content: 'Uncover the mysteries of the Ouija Board in Haunted-Mirror. Learn how to pick up and activate the Ouija Board, enabling communication with the paranormal world. Explore the voice chat and text-based UI options for asking questions to the ghost. Understand the responses and effects of Ouija Board interactions. Discover the conditions for activating and deactivating the board, the implications of different questions, and the potential outcomes, including cursed hunts. Delve into the world of the Ouija Board and its significance in Phasmophobia gameplay.'
    });
  }

}
