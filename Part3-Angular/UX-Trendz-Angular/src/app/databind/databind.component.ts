import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  //Interpolation
  name: string = 'Chaman Bharti';
  constructor() { }

  ngOnInit() {
  }

  myMethod(){
    return "My name is "+this.name;
  }

  appStatus:boolean = false;
  status1 = "Online";
  status2 = "Offline";

  enable = false;
}
