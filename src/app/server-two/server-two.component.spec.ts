import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTwoComponent } from './server-two.component';

describe('ServerTwoComponent', () => {
  let component: ServerTwoComponent;
  let fixture: ComponentFixture<ServerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
