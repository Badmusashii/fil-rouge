import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberupdateComponent } from './memberupdate.component';

describe('MemberupdateComponent', () => {
  let component: MemberupdateComponent;
  let fixture: ComponentFixture<MemberupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberupdateComponent]
    });
    fixture = TestBed.createComponent(MemberupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
