import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form3',
  templateUrl: './template-form3.component.html',
  styleUrls: ['./template-form3.component.css']
})
export class TemplateForm3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  First Name:<input type="text" name="firstname">
  FormControl as
  let firstName = new FormControl();//Creating a FormControl in a Reactive forms
  */
}
