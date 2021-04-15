import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
// https://www.techiediaries.com/angular-formdata/
// https://www.techiediaries.com/formdata/ for multiple file
export class UploadFileComponent implements OnInit {
  SERVER_URL = "http://localhost:3000/upload";
  uploadForm: FormGroup;  
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  onFileSelect(event) {
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
  onSubmit(){
    const formData = new FormData();
    formData.append('file',this.uploadForm.get('profile').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
