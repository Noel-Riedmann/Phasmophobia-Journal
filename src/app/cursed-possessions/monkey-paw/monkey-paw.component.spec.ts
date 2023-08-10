import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyPawComponent } from './monkey-paw.component';

describe('MonkeyPawComponent', () => {
  let component: MonkeyPawComponent;
  let fixture: ComponentFixture<MonkeyPawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonkeyPawComponent]
    });
    fixture = TestBed.createComponent(MonkeyPawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
