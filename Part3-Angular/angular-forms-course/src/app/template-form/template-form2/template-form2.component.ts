import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form2',
  templateUrl: './template-form2.component.html',
  styleUrls: ['./template-form2.component.css']
})
export class TemplateForm2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public product;
  public onFormSubmit(obj){
    this.product = obj;
    alert(this.product.txtName);
  }
  showCityError = true;
  showEvenError = false;
  onCityChange(val) {
    if(val=='notcity') {
      this.showCityError = true;
    } else {
      this.showCityError = false;
    }
  }

  VerifyEven(val) {
    if(val % 2 == 0) {
      this.showEvenError = false;
    } else {
      this.showEvenError = true;
    }
  }

}
