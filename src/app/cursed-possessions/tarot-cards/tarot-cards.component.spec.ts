import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotCardsComponent } from './tarot-cards.component';

describe('TarotCardsComponent', () => {
  let component: TarotCardsComponent;
  let fixture: ComponentFixture<TarotCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarotCardsComponent]
    });
    fixture = TestBed.createComponent(TarotCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
