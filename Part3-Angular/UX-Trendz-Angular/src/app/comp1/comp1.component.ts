import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ServiceUtitlitiesService } from '../appServices/service-utitlities.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{

  constructor(private serviceSubject: ServiceUtitlitiesService) {
    this.serviceSubject.userName.subscribe(uname => {
      this.userName = uname;
    })
    console.log("constructor Called");
  }

  counter;
  num:number = 1;
  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges Called");
    // console.log('ngOnChanges Called:'+'CurrentValue:'+changes.myValue.currentValue);
    // console.log('PreviousValue:'+changes.myValue.previousValue);
    // console.log('FirstChange:'+changes.myValue.firstChange);
    // console.log('FirstChange:'+changes.myValue.isFirstChange);
    // console.log(changes);

    this.counter = setInterval( ()=>{
      this.num = this.num + 1;
      console.log(this.num);
    },1000)
  }
  ngOnInit() {
    console.log("ngOnInit Called");
  }

  ngDoCheck(){
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Called");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Called");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit Called");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked Called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy Called");
    clearInterval(this.counter);
  }

  // userName:string = "Chaman"; //using Subject
  userName:string; //using BehaviorSubject

  updateUserName(uname){
    // this.userName = uname.value;
    this.serviceSubject.userName.next(uname.value);
  }

  @Input() myValue = "Chaman";
}
