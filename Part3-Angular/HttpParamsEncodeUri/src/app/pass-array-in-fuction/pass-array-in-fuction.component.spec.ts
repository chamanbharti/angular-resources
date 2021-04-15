import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassArrayInFuctionComponent } from './pass-array-in-fuction.component';

describe('PassArrayInFuctionComponent', () => {
  let component: PassArrayInFuctionComponent;
  let fixture: ComponentFixture<PassArrayInFuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassArrayInFuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassArrayInFuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
