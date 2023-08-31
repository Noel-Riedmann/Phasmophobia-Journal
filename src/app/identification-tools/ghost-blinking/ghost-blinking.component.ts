import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghost-blinking',
  templateUrl: './ghost-blinking.component.html',
  styleUrls: ['./ghost-blinking.component.css'],
})
export class GhostBlinkingComponent implements OnInit {
  ghostBlinking: Record<string, any> = {};

  ngOnInit() {
    this.ghostBlinking = {
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

    this.start();
  }

  hidePhantom: boolean = false;
  hideNormal: boolean = false;
  hideOni: boolean = false;

  ghostStates: Record<string, GhostState> = {
    Normal: new GhostState(),
    Phantom: new GhostState(),
    Oni: new GhostState(),
  };

  start() {
    this.startBlinking('Normal');
    this.startBlinking('Phantom');
    this.startBlinking('Oni');
  }

  startBlinking(ghostType: string) {
    const ghostState = this.ghostStates[ghostType];
    const { vis_max, vis_min, invis_max, invis_min } = this.ghostBlinking[ghostType];

    this.delayedAction(() => {
      ghostState.visible = !ghostState.visible;
      this.updateHideFlags(ghostType, ghostState.visible);
      const delay = ghostState.visible ? this.getRandomDelay(vis_min, vis_max) : this.getRandomDelay(invis_min, invis_max);
      this.startBlinking(ghostType);
    }, ghostState.visible ? this.getRandomDelay(vis_min, vis_max) : this.getRandomDelay(invis_min, invis_max));
  }

  updateHideFlags(ghostType: string, isVisible: boolean) {
    switch (ghostType) {
      case 'Normal':
        this.hideNormal = !isVisible;
        break;
      case 'Phantom':
        this.hidePhantom = !isVisible;
        break;
      case 'Oni':
        this.hideOni = !isVisible;
        break;
    }
  }

  getRandomDelay(min: number, max: number): number {
    return (Math.random() * (max - min) + min) * 1000;
  }

  delayedAction(callback: () => void, delay: number) {
    setTimeout(callback, delay);
  }

  phntmHide = false;
  nrmlHide = false;
  nHide = false;

  hide(name: string) {
    switch (name) {
      case 'phntm':
        this.phntmHide = !this.phntmHide;
        break;
      case 'nrml':
        this.nrmlHide = !this.nrmlHide;
        break;
      case 'n':
        this.nHide = !this.nHide;
        break;
    }
  }
}

class GhostState {
  visible: boolean = true;
}
