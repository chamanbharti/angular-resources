import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form0',
  templateUrl: './template-form0.component.html',
  styleUrls: ['./template-form0.component.css']
})
export class TemplateForm0Component implements OnInit {

  @ViewChild('contactForm') contactForm: NgForm;
  contact: Contact;
  constructor() { }

  ngOnInit() {
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: "400050"
      }
    };

    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    });
  }
  defaultData(){
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: "400050"
      }
    };
  }

  countryList: Country[] = [
    new Country("1", "India"),
    new Country('2', 'USA'),
    new Country('3', 'England')
  ];

  onSubmit(contactForm) {
    console.log(contactForm.value);
  }

  setDefaults() {
    this.defaultData();
    this.contactForm.setValue(this.contact);
    console.log('setDefaults():',this.contactForm);
  }

  patchValue(){
    var obj = {
      firstname: 'Chaman',
      lastname: 'Bharti',
      email: 'thechaman.bharti@gmail.com'
    };
    this.contactForm.control.patchValue(obj);
    console.log('patchValue():',this.contactForm);
  }
  changeAddress(){
   let obj = {
     city: 'Noida',
     street: 'Y7',
     pincode: '120320'
   };
   this.contactForm.controls['address'].patchValue(obj);
   console.log('changeAddress():',this.contactForm.controls);
  }
  changeCountry(){
    this.contactForm.controls['country'].setValue('1');
    console.log('changeCountry():',this.contactForm.controls);
  }

  reset(){
    this.contactForm.reset();
    console.log('reset() clicked');
  }

  resetForm(){
    this.contactForm.resetForm();
    console.log('reset() clicked');
  }
}
export class Country{
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
export class Contact {
  firstname:string;
  lastname:string;
  email:string;
  gender:string;
  isMarried:boolean;
  country:string;
  address: {
    city:string;
    street:string;
    pincode:string;
  }
}
