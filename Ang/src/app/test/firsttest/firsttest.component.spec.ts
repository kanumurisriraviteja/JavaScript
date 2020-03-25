import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttestComponent } from './firsttest.component';

describe('FirsttestComponent', () => {
  let component: FirsttestComponent;
  let fixture: ComponentFixture<FirsttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
