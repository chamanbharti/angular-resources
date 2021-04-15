import { Component, OnInit, Input, ViewChild, ContentChild, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() type = 'success';
  @ViewChild('h1') h1;
  @ContentChild('insideNgContent') insideNgContent;
  constructor() { }

  ngOnInit(): void {
  }
  alert() {
    console.log(this.h1);
  }
  ngAfterViewInit() {
    console.log(this.h1);
  }
  ngAfterContentInit() {
    console.log(this.insideNgContent);
  }

}
