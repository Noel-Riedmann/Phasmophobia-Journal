import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauntedMirrorComponent } from './haunted-mirror.component';

describe('HauntedMirrorComponent', () => {
  let component: HauntedMirrorComponent;
  let fixture: ComponentFixture<HauntedMirrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HauntedMirrorComponent]
    });
    fixture = TestBed.createComponent(HauntedMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
