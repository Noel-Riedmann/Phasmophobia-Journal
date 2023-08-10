import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoodooDollComponent } from './voodoo-doll.component';

describe('VoodooDollComponent', () => {
  let component: VoodooDollComponent;
  let fixture: ComponentFixture<VoodooDollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoodooDollComponent]
    });
    fixture = TestBed.createComponent(VoodooDollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
