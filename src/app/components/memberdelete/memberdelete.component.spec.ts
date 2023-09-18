import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberdeleteComponent } from './memberdelete.component';

describe('MemberdeleteComponent', () => {
  let component: MemberdeleteComponent;
  let fixture: ComponentFixture<MemberdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberdeleteComponent]
    });
    fixture = TestBed.createComponent(MemberdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
