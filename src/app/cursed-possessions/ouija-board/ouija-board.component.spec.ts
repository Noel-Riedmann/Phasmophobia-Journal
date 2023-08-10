import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuijaBoardComponent } from './ouija-board.component';

describe('OuijaBoardComponent', () => {
  let component: OuijaBoardComponent;
  let fixture: ComponentFixture<OuijaBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OuijaBoardComponent]
    });
    fixture = TestBed.createComponent(OuijaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
