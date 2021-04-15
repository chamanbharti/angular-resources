import { Component, OnInit, Inject } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { COURSES } from 'src/db-data';
import { AppConfig, CONFIG_TOKEN } from '../config';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
  courses: Course[] = COURSES;
  constructor(private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) { }

  ngOnInit() {
  }
  onEditCourse() {
    // this.courses = [undefined];
    // this.courses[0].description = 'ngOnChanges';
    const course = this.courses[0];
    const newCourse = {
      ...course,
      description: 'ngOnChanges'
    };
    this.courses[0] = newCourse;
  }
}
