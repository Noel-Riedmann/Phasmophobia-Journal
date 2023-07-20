import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostsListComponent } from './ghosts-list.component';

describe('GhostsListComponent', () => {
  let component: GhostsListComponent;
  let fixture: ComponentFixture<GhostsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhostsListComponent]
    });
    fixture = TestBed.createComponent(GhostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
