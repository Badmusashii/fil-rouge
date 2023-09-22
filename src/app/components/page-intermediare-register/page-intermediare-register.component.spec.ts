import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIntermediareRegisterComponent } from './page-intermediare-register.component';

describe('PageIntermediareRegisterComponent', () => {
  let component: PageIntermediareRegisterComponent;
  let fixture: ComponentFixture<PageIntermediareRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageIntermediareRegisterComponent]
    });
    fixture = TestBed.createComponent(PageIntermediareRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
