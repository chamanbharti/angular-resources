import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form4',
  templateUrl: './template-form4.component.html',
  styleUrls: ['./template-form4.component.css']
})
export class TemplateForm4Component implements OnInit {
 @ViewChild('myForm')signUpForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // <form (ngSubmit)="onSubmit(myForm)" #myForm="ngForm">
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  //<form (ngSubmit)="onSubmit()" #myForm="ngForm">
  onSubmit() {
    console.log(this.signUpForm);
  }
  show(){

  }
}
