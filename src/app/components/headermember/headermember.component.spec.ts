import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermemberComponent } from './headermember.component';

describe('HeadermemberComponent', () => {
  let component: HeadermemberComponent;
  let fixture: ComponentFixture<HeadermemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadermemberComponent]
    });
    fixture = TestBed.createComponent(HeadermemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
