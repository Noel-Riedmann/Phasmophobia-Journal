import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummoningCircleComponent } from './summoning-circle.component';

describe('SummoningCircleComponent', () => {
  let component: SummoningCircleComponent;
  let fixture: ComponentFixture<SummoningCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummoningCircleComponent]
    });
    fixture = TestBed.createComponent(SummoningCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
