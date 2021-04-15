import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  @ViewChild('f', {static: false}) form1: any;
  constructor() { }

  ngOnInit() {
    // model form
    // this.myForm = new FormGroup({
    //   name: new FormGroup({
    //     firstName: new FormControl('', Validators.required),
    //     lastName: new FormControl('', Validators.required)
    //   }),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern('[^ @]*@[^ @]*')
    //     ]),
    //     password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(8)
    //     ]),
    //   language: new FormControl()
    // });
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }
  createForm() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted');
      this.myForm.reset();
    }
  }

}
