import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessAlertCompComponent } from './success-alert-comp.component';

describe('SuccessAlertCompComponent', () => {
  let component: SuccessAlertCompComponent;
  let fixture: ComponentFixture<SuccessAlertCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessAlertCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessAlertCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
