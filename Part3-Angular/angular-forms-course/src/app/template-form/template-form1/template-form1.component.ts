import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form1',
  templateUrl: './template-form1.component.html',
  styleUrls: ['./template-form1.component.css']
})
export class TemplateForm1Component implements OnInit {

  @ViewChild('myForm') myForm:NgForm;
  username = '';
  email = '';
  defaultCourse = 'Angular';
  genders = [
    {id: '1',value:'Male'},
    {id: '2',value:'Female'}
  ];
  defaultGender = 'Female';
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  // onSubmit(){
  //   console.log('submitted')
  // }

  // onSubmit(form: HTMLFontElement){
  //   console.log(form);
  // }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }


 //using @ViewChild
  // onSubmit(){
  //   console.log(this.myForm);
  // }

  setUsername(){

    //setValue()
    // this.myForm.setValue({
    //   userDetails: {
    //     username: 'Roshan Parveen',
    //     email: 'roshan.praveen@gmail.com'
    //   },
    //   course: 'RxJS',
    //   gender: 'Female'
    // })


    //patchValue()
    // this.myForm.form.patchValue({
    //     userDetails: {
    //     username: 'Chaman fucked off Roshan Parveen'
    //   }
    // })

    //Extract & Use Form Data
  }

  // onSubmit(){
  //   console.log(this.myForm);
  //   this.submitted = true;
  //   this.formData.username = this.myForm.value.userDetails.username;
  //   this.formData.email = this.myForm.value.userDetails.email;
  //   this.formData.course = this.myForm.value.course;
  //   this.formData.gender = this.myForm.value.gender;
  // }
  // formData = {
  //   username: '',
  //   email: '',
  //   course: '',
  //   gender: ''
  // }

  //Reset the Form
  onSubmit(){
    console.log(this.myForm);
    this.submitted = true;
    this.formData.username = this.myForm.value.userDetails.username;
    this.formData.email = this.myForm.value.userDetails.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;
    this.myForm.reset();
  }
  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  }
}
