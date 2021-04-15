import { Component, OnInit, ContentChild, ElementRef, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-teachermaster',
  templateUrl: './teachermaster.component.html',
  styleUrls: ['./teachermaster.component.css']
})
export class TeachermasterComponent implements OnInit, AfterContentInit {
  @ContentChild('helloDiv', {static: false}) contentHelloDiv: ElementRef;
  @ContentChildren('helloDivQuery') cTeacher: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    console.log(this.contentHelloDiv.nativeElement.innerHTML);
    const queryData: ElementRef[] = this.cTeacher.toArray();
    console.log(queryData);
  }

}
