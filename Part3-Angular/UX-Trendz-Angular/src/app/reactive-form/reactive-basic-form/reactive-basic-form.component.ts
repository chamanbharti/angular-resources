import {Component, OnInit, ViewChild} from '@angular/core';
import {Form, FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-basic-form',
  templateUrl: './reactive-basic-form.component.html',
  styleUrls: ['./reactive-basic-form.component.css']
})
export class ReactiveBasicFormComponent implements OnInit {
  myReactiveForm: FormGroup;
  notAllowedName = ['Mamta', 'Chaman'];
  formStaus;
  genders = [
    {
      id: 1, value: 'Male'
    },
    {
      id: 2, value: 'Female'
    }
  ];
  submitted = false;
  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  }
  // ******for reactive model****
  searchField: FormControl;
  searches: string[] = [];
  // ****************************
  constructor() { }

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      userDetails: new FormGroup({
      username: new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email], this.NaEmails)
    }),
      // username: new FormControl(null, Validators.required),
      // email: new FormControl(null, [Validators.required, Validators.email]),
      // course: new FormControl('RxJS'),
      // gender: new FormControl('Male')
      course: new FormControl('RxJS'),
      gender: new FormControl('Male'),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
    // this.myReactiveForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    // this.myReactiveForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );

    this.myReactiveForm.statusChanges.subscribe(
      (status) => {
        console.log(status)
        this.formStaus = status;
      }
    );
    // setTimeout( () => {
    //   this.myReactiveForm.setValue({
    //     userDetails: {
    //       username: 'Rahi',
    //       email: 'rahi.bharti@gmail.com'
    //     },
    //     course: 'RxJS',
    //     gender: 'Male',
    //     skills: [
    //       'Java'
    //     ]
    //   });
    // }, 2000);
    setTimeout( () => {
      this.myReactiveForm.patchValue({
        userDetails: {
          email: 'rahi.bharti@gmail.com'
        }
      });
    }, 4000);
  // ***********reactive model search
    this.searchField = new FormControl();
    console.log('search called');
    this.searchField.valueChanges
      .subscribe( term => {
      this.searches.push(term);
    });
  }

  // onSubmit(form: HtmlFontElement) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({
      userDetails: {
              username: 'Rahi',
              email: 'rahi.bharti@gmail.com'
            },
            course: 'RxJS',
            gender: 'Male',
            skills: [
              'Java'
            ]
          });
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
  }
  onAddSkills() {
    const control = new FormControl(null, Validators.required);
    (<FormArray> this.myReactiveForm.get('skills')).push(control);
  }
  NaNames(control: FormControl) {
    if (this.notAllowedName.indexOf(control.value) !== -1) {
      return {'NameIsNotAllowed': true};
    }
    return null;
  }

  NaEmails(control: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
          setTimeout( () => {
            if (control.value === 'chaman.bharti84@gmail.com') {
              resolve({'emailNotAllowed': true});
            } else {
              resolve(null);
            }
          }, 3000);
      })
    return myResponse;
  }
}
