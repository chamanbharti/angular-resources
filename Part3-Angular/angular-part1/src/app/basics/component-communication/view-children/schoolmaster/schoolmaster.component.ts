import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-schoolmaster',
  templateUrl: './schoolmaster.component.html',
  styleUrls: ['./schoolmaster.component.css']
})
export class SchoolmasterComponent implements OnInit, AfterViewInit {
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
  @ViewChildren(AlertComponent, {read: ElementRef}) alerts2: QueryList<ElementRef>;
  // @ViewChildren('div') divs: QueryList<any>;
  @ViewChild('div', {static: false}) divs: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.alerts.forEach(alertInstance => console.log(alertInstance));
    // this.divs.forEach(d => console.log(d));
    console.log(this.divs.nativeElement.innerHTML);
    this.alerts2.forEach(alertInstance => console.log(alertInstance));
  }
}
