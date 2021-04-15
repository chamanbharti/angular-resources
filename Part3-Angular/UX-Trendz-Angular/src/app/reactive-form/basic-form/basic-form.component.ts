import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
 @ViewChild('myForm', {static: false}) myForm: NgForm
  defaultCourse = 'RxJS';
  userName = '';
  emailAddress = '';
  genders = [
      {
        id: 1, value: 'Male'
      },
      {
        id: 2, value: 'Female'
      }
  ];
  defaultGender = 'Female';
  submitted = false;
  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  }
  constructor() { }

  ngOnInit() {
  }

  // onSubmit(form: HtmlFontElement) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.myForm);
    this.submitted = true;
    this.formData.username = this.myForm.value.userDetails.username;
    this.formData.email = this.myForm.value.userDetails.email;
    this.formData.gender = this.myForm.value.gender;
    this.formData.course = this.myForm.value.course;
    // user resetForm
    this.myForm.reset();
  }
  setUsername() {
    // setValue
    // this.myForm.setValue({
    //   userDetails: {
    //     username: 'Chaman Bharti',
    //     email: ''
    //   },
    //   course: 'RxJS',
    //   gender: 'Male'
    // });

    // patchValue
    this.myForm.form.patchValue({
      userDetails: {
            username: 'Chaman Bharti',
          }
    });
  }

}
