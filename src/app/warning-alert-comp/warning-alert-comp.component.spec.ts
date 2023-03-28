import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlertCompComponent } from './warning-alert-comp.component';

describe('WarningAlertCompComponent', () => {
  let component: WarningAlertCompComponent;
  let fixture: ComponentFixture<WarningAlertCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningAlertCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningAlertCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
