import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmloyeeComponent } from './create-emloyee.component';

describe('CreateEmloyeeComponent', () => {
  let component: CreateEmloyeeComponent;
  let fixture: ComponentFixture<CreateEmloyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmloyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
