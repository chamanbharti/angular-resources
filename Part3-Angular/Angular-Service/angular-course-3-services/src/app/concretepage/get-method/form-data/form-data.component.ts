import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
// https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/
form: FormGroup;

constructor(public fb: FormBuilder,private http: HttpClient) {
  this.form = this.fb.group({
    name: [''],
    avatar: [null],
    list:[1,2,3]
  })
}

  ngOnInit() {
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }

  submitForm() {
    console.log(this.form.value);
  var formData: any = new FormData();
  formData.append("name", this.form.get('name').value);
  formData.append("avatar", this.form.get('avatar').value);
  formData.append("avatar", this.form.get('avatar').value);

  this.http.post('http://localhost:4000/api/create-user', formData)
  .subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
  }


}
