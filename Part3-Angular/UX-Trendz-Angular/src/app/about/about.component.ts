import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myValue = "chaman";
  submitValue(val){
    this.myValue = val.value;
  }

  comp1Exist:boolean = true;

  destroy(){
    this.comp1Exist = false;
  }

}
