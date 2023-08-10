import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursedHuntComponent } from './cursed-hunt.component';

describe('CursedHuntComponent', () => {
  let component: CursedHuntComponent;
  let fixture: ComponentFixture<CursedHuntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursedHuntComponent]
    });
    fixture = TestBed.createComponent(CursedHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
