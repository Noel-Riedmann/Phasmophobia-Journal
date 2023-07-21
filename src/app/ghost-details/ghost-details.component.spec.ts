import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostDetailsComponent } from './ghost-details.component';

describe('GhostDetailsComponent', () => {
  let component: GhostDetailsComponent;
  let fixture: ComponentFixture<GhostDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhostDetailsComponent]
    });
    fixture = TestBed.createComponent(GhostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
