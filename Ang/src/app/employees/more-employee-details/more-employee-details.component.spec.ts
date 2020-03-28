import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreEmployeeDetailsComponent } from './more-employee-details.component';

describe('MoreEmployeeDetailsComponent', () => {
  let component: MoreEmployeeDetailsComponent;
  let fixture: ComponentFixture<MoreEmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreEmployeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
