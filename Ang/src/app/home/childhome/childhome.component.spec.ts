import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildhomeComponent } from './childhome.component';

describe('ChildhomeComponent', () => {
  let component: ChildhomeComponent;
  let fixture: ComponentFixture<ChildhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
