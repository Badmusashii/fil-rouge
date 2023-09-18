import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupecardComponent } from './groupecard.component';

describe('GroupecardComponent', () => {
  let component: GroupecardComponent;
  let fixture: ComponentFixture<GroupecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupecardComponent]
    });
    fixture = TestBed.createComponent(GroupecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
