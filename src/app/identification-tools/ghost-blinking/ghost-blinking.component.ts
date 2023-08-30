import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';



@Component({
  selector: 'app-ghost-blinking',
  templateUrl: './ghost-blinking.component.html',
  styleUrls: ['./ghost-blinking.component.css'],
})
export class GhostBlinkingComponent implements OnInit {
  ngOnInit() {
    const entityData: Record<string, any> = {
      Normal: {
        vis_max: 0.3,
        vis_min: 0.08,
        invis_max: 1.0,
        invis_min: 0.3,
      },
      Phantom: {
        vis_max: 0.3,
        vis_min: 0.08,
        invis_max: 2.0,
        invis_min: 1.0,
      },
      Oni: {
        vis_max: 1.0,
        vis_min: 0.3,
        invis_max: 0.3,
        invis_min: 0.08,
      },
    };

  }
}
