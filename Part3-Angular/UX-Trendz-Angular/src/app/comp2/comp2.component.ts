import { Component, OnInit, ElementRef, ContentChild, Renderer2, AfterContentInit, ViewChild } from '@angular/core';
import { ServiceUtitlitiesService } from '../appServices/service-utitlities.service';
import { TestDirective } from '../appDirectives/test.directive';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, AfterContentInit {

  constructor(private serviceSubject:ServiceUtitlitiesService, private renderer:Renderer2) { 
    this.serviceSubject.userName.subscribe(uname =>{
      this.userName = uname;
    })
  }
 

  // userName:string = "Chaman"; //using Subject
  userName:string; //using BehaviorSubject
 
  updateUserName(uname){
    // this.userName = uname.value;
    this.serviceSubject.userName.next(uname.value);
  }

  //view child
  viewName="Mamta";
  clickMe(){
    alert(this.viewName);
    var text = this.renderer.createText('. this text is created by renderer');
    this.renderer.appendChild(this.childParagraph.nativeElement,text);
  }

  @ContentChild('childContent', {static: false}) childParagraph:ElementRef;
  ngOnInit() {
    console.log(this.childParagraph);
  }
  ngAfterContentInit(){
    console.log(this.childParagraph);
    this.renderer.setStyle(this.childParagraph.nativeElement,'color','black');
  }

  @ViewChild(TestDirective, {static: false}) mydir:TestDirective;
  
  changeColor(color){
    this.mydir.changeBG(color);
  }
}
