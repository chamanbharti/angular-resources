import { Component, OnInit } from '@angular/core';
import { ServiceUtitlitiesService } from '../appServices/service-utitlities.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private serviceSubject:ServiceUtitlitiesService) { 
    this.serviceSubject.userName.subscribe(uname =>{
      this.userName = uname;
    })
  }

  ngOnInit() {
  }
  // userName:string = "Chaman"; //using Subject
  userName:string; //using BehaviorSubject

  updateUserName(uname){
    // this.userName = uname.value;
    this.serviceSubject.userName.next(uname.value);
  }
}
