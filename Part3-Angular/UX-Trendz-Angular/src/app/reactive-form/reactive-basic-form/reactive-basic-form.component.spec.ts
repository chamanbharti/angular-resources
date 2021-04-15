import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveBasicFormComponent } from './reactive-basic-form.component';

describe('ReactiveBasicFormComponent', () => {
  let component: ReactiveBasicFormComponent;
  let fixture: ComponentFixture<ReactiveBasicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveBasicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveBasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
