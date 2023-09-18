import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupecreateComponent } from './groupecreate.component';

describe('GroupecreateComponent', () => {
  let component: GroupecreateComponent;
  let fixture: ComponentFixture<GroupecreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupecreateComponent]
    });
    fixture = TestBed.createComponent(GroupecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
