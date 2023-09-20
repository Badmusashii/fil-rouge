import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourchetteDePrixComponent } from './fourchette-de-prix.component';

describe('FourchetteDePrixComponent', () => {
  let component: FourchetteDePrixComponent;
  let fixture: ComponentFixture<FourchetteDePrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourchetteDePrixComponent]
    });
    fixture = TestBed.createComponent(FourchetteDePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
