import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Get1Component } from './get1.component';

describe('Get1Component', () => {
  let component: Get1Component;
  let fixture: ComponentFixture<Get1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Get1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Get1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
