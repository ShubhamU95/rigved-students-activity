import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRegisterFormComponent } from './activity-register-form.component';

describe('ActivityRegisterFormComponent', () => {
  let component: ActivityRegisterFormComponent;
  let fixture: ComponentFixture<ActivityRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
