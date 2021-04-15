import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  scienceteacher = 'William';
  mathteacher = 'John';
  physicsteacher = 'johnson';
  @ViewChild('divTeacher', {static: false}) elementTeacherDiv: ElementRef;
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}
