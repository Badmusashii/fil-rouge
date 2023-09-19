import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMesRestosComponent } from './page-mes-restos.component';

describe('PageMesRestosComponent', () => {
  let component: PageMesRestosComponent;
  let fixture: ComponentFixture<PageMesRestosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMesRestosComponent]
    });
    fixture = TestBed.createComponent(PageMesRestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
