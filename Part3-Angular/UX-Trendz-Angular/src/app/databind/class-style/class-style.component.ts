import { Component, OnInit } from '@angular/core';
import { fail } from 'assert';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myProperty:boolean = true;
  myStyle1 = "15px";
  isActive:boolean = false;

  multiClasses = {
    class1:true,
    class2:false,
    class3:true
  }

  multiStyles = {
      'background':'green',
      'border':'10px solid red'
     }

}
