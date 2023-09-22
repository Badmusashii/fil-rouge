import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMonCompteComponent } from './page-mon-compte.component';

describe('PageMonCompteComponent', () => {
  let component: PageMonCompteComponent;
  let fixture: ComponentFixture<PageMonCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMonCompteComponent]
    });
    fixture = TestBed.createComponent(PageMonCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
