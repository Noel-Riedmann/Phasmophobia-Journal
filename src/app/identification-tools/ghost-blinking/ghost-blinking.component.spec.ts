import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostBlinkingComponent } from './ghost-blinking.component';

describe('GhostBlinkingComponent', () => {
  let component: GhostBlinkingComponent;
  let fixture: ComponentFixture<GhostBlinkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhostBlinkingComponent]
    });
    fixture = TestBed.createComponent(GhostBlinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
