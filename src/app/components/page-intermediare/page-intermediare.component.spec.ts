import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIntermediareComponent } from './page-intermediare.component';

describe('PageIntermediareComponent', () => {
  let component: PageIntermediareComponent;
  let fixture: ComponentFixture<PageIntermediareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageIntermediareComponent]
    });
    fixture = TestBed.createComponent(PageIntermediareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
