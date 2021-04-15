import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TeacherComponent } from '../teacher/teacher.component';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit, AfterViewInit {
  name = 'Chaman Bharti';
  @ViewChild(TeacherComponent, { static: false }) teacher: TeacherComponent;
  @ViewChildren(TeacherComponent) vcteacher: QueryList<TeacherComponent>;
  schscienceteacher: string;
  @ViewChild('div', { static: false }) element: ElementRef;
  @ViewChild('username', { static: false }) userelement: ElementRef;
  constructor(private changeDetect: ChangeDetectorRef) { }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
   console.log(this.teacher.scienceteacher);
   this.schscienceteacher = this.teacher.scienceteacher = 'chaman';
   this.changeDetect.detectChanges();
    console.log(this.userelement);
    this.element.nativeElement.style.display = 'none';
    console.log(this.vcteacher);
    console.log(this.teacher.elementTeacherDiv.nativeElement.style.display);
    this.teacher.elementTeacherDiv.nativeElement.style.display = 'none';
    console.log('Name:' + this.teacher.name);
  }

}
