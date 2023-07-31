import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursedPossesionsComponent } from './cursed-possesions.component';

describe('CursedPossesionsComponent', () => {
  let component: CursedPossesionsComponent;
  let fixture: ComponentFixture<CursedPossesionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursedPossesionsComponent]
    });
    fixture = TestBed.createComponent(CursedPossesionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
