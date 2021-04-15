import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message:string = '';
  onAddCart(){
    this.message = "Product Added in Cart";
  }

  onInputClick(event:any){
    console.log(event.target.value);
    console.log(event);
  }

  onAddCart1(event:any){
    this.message = event.target.value+" Added in Cart";
  }

  getInputInfo(inputInfo){
    console.log(inputInfo);
    console.log(inputInfo.name);
    console.log(inputInfo.type);
    console.log(inputInfo.value);
  }
}
