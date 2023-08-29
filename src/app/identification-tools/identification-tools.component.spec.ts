import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationToolsComponent } from './identification-tools.component';

describe('IdentificationToolsComponent', () => {
  let component: IdentificationToolsComponent;
  let fixture: ComponentFixture<IdentificationToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentificationToolsComponent]
    });
    fixture = TestBed.createComponent(IdentificationToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
