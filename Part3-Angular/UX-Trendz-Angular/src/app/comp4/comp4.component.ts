import { Component, OnInit } from '@angular/core';
import { ServiceUtitlitiesService } from '../appServices/service-utitlities.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

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
