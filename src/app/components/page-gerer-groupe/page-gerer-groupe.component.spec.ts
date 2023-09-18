import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGererGroupeComponent } from './page-gerer-groupe.component';

describe('PageGererGroupeComponent', () => {
  let component: PageGererGroupeComponent;
  let fixture: ComponentFixture<PageGererGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGererGroupeComponent]
    });
    fixture = TestBed.createComponent(PageGererGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
