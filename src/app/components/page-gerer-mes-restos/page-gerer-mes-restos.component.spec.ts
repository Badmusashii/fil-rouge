import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGererMesRestosComponent } from './page-gerer-mes-restos.component';

describe('PageGererMesRestosComponent', () => {
  let component: PageGererMesRestosComponent;
  let fixture: ComponentFixture<PageGererMesRestosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGererMesRestosComponent]
    });
    fixture = TestBed.createComponent(PageGererMesRestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
