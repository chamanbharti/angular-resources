import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, InjectionToken, Inject, Optional, ChangeDetectionStrategy, ChangeDetectorRef, Input} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { CONFIG_TOKEN, APP_CONFIG, AppConfig } from './config';
import { CoursesService } from './services/courses.service';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {

// Angular Injectable Services - New Section Introduction
// hard coded
  // courses = COURSES;
  // ngOnInit() {
  // }

  // courses = COURSES;
  // constructor(private http: HttpClient) {

  // }
  // ngOnInit() {
  //   this.http.get('/api/courses')
  //   .subscribe(
  //     val => console.log(val)
  //   );
  // }

  // courses;
  // constructor(private http: HttpClient) {
  // }
  // ngOnInit() {
  //   this.http.get('/api/courses')
  //   .subscribe(
  //     courses => this.courses = courses
  //   );
  // }

  // courses;
  // constructor(private http: HttpClient) {
  // }
  // ngOnInit() {
  //   const params = new HttpParams()
  //   .set('page', '1')
  //   .set('pageSize', '10');
  //   this.http.get('/api/courses', {params})
  //   .subscribe(
  //     courses => this.courses = courses
  //   );
  // }
// The Angular HTTP Client - GET calls with Request Parameters
  // courses;
  // constructor(private http: HttpClient) {
  // }
  // ngOnInit() {
  //   const params = new HttpParams()
  //   .set('page', '1')
  //   .set('pageSize', '10');
  //   this.http.get('/api/courses', {params})
  //   .subscribe(
  //     courses => this.courses = courses
  //   );
  // }

  // The Async Pipe - a Better way of passing Observable data to the View
  // courses$: Observable<Course[]>;
  // constructor(private http: HttpClient) {
  // }
  // ngOnInit() {
  //   const params = new HttpParams()
  //   .set('page', '1')
  //   .set('pageSize', '10');
  //   this.courses$ = this.http.get<Course[]>('/api/courses', {params});
  // }

  // Angular Custom Services - The Injectable Decorator
  // courses$: Observable<Course[]>;
  // constructor(private http: HttpClient, private coursesSevice: CoursesService) {
  // }
  // ngOnInit() {
  //   console.log('coursesService app' + this.coursesSevice);
  //   const params = new HttpParams()
  //   .set('page', '1')
  //   .set('pageSize', '10');
  //   this.courses$ = this.http.get<Course[]>('/api/courses', {params});
  // }

  // Angular Custom Services - Fetching  Data
  // courses$: Observable<Course[]>;
  // constructor(private coursesSevice: CoursesService) {
  // }
  // ngOnInit() {
  //    this.courses$ = this.coursesSevice.loadCourses();
  // }

  // Angular Custom Service - Data Modification with an HTTP PUT
  // courses$: Observable<Course[]>;
  // constructor(@Inject(COURSES_SERVICE) private coursesSevice: CoursesService) {
  // }
  // ngOnInit() {
  //    this.courses$ = this.coursesSevice.loadCourses();
  // }
  // save(course: Course) {
  //   this.coursesSevice.saveCourse(course)
  //   .subscribe(
  //     () => console.log('Course Saved!')
  //   );
  // }
//   // Angular DI - Understanding Providers and Injection Tokens
// function coursesServiceProvider(http: HttpClient): CoursesService {
//   return new CoursesService(http);
// }
// export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [
//     {
//       provide: COURSES_SERVICE,
//       useFactory: coursesServiceProvider,
//       deps: [HttpClient]
//     }
//   ]
// })
// export class AppComponent implements OnInit {
//   // Angular DI - Understanding Providers and Injection Tokens
//   courses$: Observable<Course[]>;
//   constructor(@Inject(COURSES_SERVICE) private coursesSevice: CoursesService) {
//   }
//   ngOnInit() {
//      this.courses$ = this.coursesSevice.loadCourses();
//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }

  // // Angular DI - Understanding Simplified Provider Configuration
  // @Component({
  //   selector: 'app-root',
  //   templateUrl: './app.component.html',
  //   styleUrls: ['./app.component.css'],
  //    providers: [
  //   {
  //     provide: CoursesService,
  //     useClass: CoursesService
  //   }
  // ]
  // })
  // export class AppComponent implements OnInit {
  //   courses$: Observable<Course[]>;
  //   constructor(private coursesSevice: CoursesService) {
  //   }
  //   ngOnInit() {
  //      this.courses$ = this.coursesSevice.loadCourses();
  //   }
  //   save(course: Course) {
  //     this.coursesSevice.saveCourse(course)
  //     .subscribe(
  //       () => console.log('Course Saved!')
  //     );
  //   }
  //  // Angular DI - Understanding Simplified Provider Configuration
  //  @Component({
  //   selector: 'app-root',
  //   templateUrl: './app.component.html',
  //   styleUrls: ['./app.component.css'],
  //    providers: [ CoursesService ]
  // })
  // export class AppComponent implements OnInit {
  //   courses$: Observable<Course[]>;
  //   constructor(private coursesSevice: CoursesService) {
  //   }
  //   ngOnInit() {
  //      this.courses$ = this.coursesSevice.loadCourses();
  //   }
  //   save(course: Course) {
  //     this.coursesSevice.saveCourse(course)
  //     .subscribe(
  //       () => console.log('Course Saved!')
  //     );
  //   }
//    // Understanding Hierarchical Dependency Injection
//    @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css'],
//      providers: [ CoursesService ]
//   })
//   export class AppComponent implements OnInit {
//     courses$: Observable<Course[]>;
//     constructor(private coursesSevice: CoursesService) {
//       console.log('root component ' + this.coursesSevice.id);
//     }
//     ngOnInit() {
//        this.courses$ = this.coursesSevice.loadCourses();
//     }
//     save(course: Course) {
//       this.coursesSevice.saveCourse(course)
//       .subscribe(
//         () => console.log('Course Saved!')
//       );
//     }
// }
 // Understanding Angular Tree-Shakeable Providers
//  @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   courses$: Observable<Course[]>;
//   constructor(private coursesSevice: CoursesService) {
//     console.log('root component ' + this.coursesSevice.id);
//   }
//   ngOnInit() {
//      this.courses$ = this.coursesSevice.loadCourses();
//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }
// }
// // Angular DI - Injection Tokens In Detail
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   // providers: [
//   //   {
//   //     provide: CONFIG_TOKEN,
//   //     // useFactory: () => APP_CONFIG
//   //     useValue: APP_CONFIG
//   //   }
//   // ]
// })
// export class AppComponent implements OnInit {
//   courses$: Observable<Course[]>;
//   // constructor(private coursesSevice: CoursesService,
//   //  @Inject(CONFIG_TOKEN) private config: AppConfig) {
//   //   console.log(this.config);
//   // }
//   // constructor(private coursesSevice: CoursesService) {}
//     constructor(private coursesSevice: CoursesService,
//    @Inject(CONFIG_TOKEN) private config: AppConfig) {
//     console.log(this.config);
//   }
//   ngOnInit() {
//      this.courses$ = this.coursesSevice.loadCourses();
//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }
// }
// Angular DI Decorators - Optional, Self, SkipSelf
// Optional
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   courses$: Observable<Course[]>;

//     constructor(@Optional() private coursesSevice: CoursesService,
//    @Inject(CONFIG_TOKEN) private config: AppConfig) {
//     console.log(this.config);
//   }
//   ngOnInit() {
//      this.courses$ = this.coursesSevice.loadCourses();
//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }
// }
// Angular DI Decorators - Self
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [
//     CoursesService
//   ]
// })
// export class AppComponent implements OnInit {
//   courses$: Observable<Course[]>;

//     constructor(private coursesSevice: CoursesService,
//    @Inject(CONFIG_TOKEN) private config: AppConfig) {
//     console.log(this.config);
//   }
//   ngOnInit() {
//      this.courses$ = this.coursesSevice.loadCourses();
//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }
// }
// // Angular Default Change Detection - How does it Work?
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [
//         CoursesService
//       ]
// })
// export class AppComponent implements OnInit {
//   courses = COURSES;
//   courses$: Observable<Course[]>;

//     constructor(private coursesSevice: CoursesService,
//    @Inject(CONFIG_TOKEN) private config: AppConfig) {
//   }
//   ngOnInit() {
//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }

// }
// Angular OnPush Change Detection - How does it Work?
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [
//         CoursesService
//       ]
// })
// export class AppComponent implements OnInit {
//   courses = COURSES;
//   courses$: Observable<Course[]>;

//     constructor(private coursesSevice: CoursesService,
//    @Inject(CONFIG_TOKEN) private config: AppConfig) {
//   }
//   ngOnInit() {
//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }
//   // onEditCourse() {
//   //   this.courses[0].description = 'New Value';
//   // }
//   onEditCourse() {
//     debugger
//     const course = this.courses[0];
//     const newCourse = {...course};
//     newCourse.description = 'New Value';
//     this.courses[0] = newCourse;
//   }
// }
// // OnPush Change Detection and Observables Data Streams
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class AppComponent implements OnInit {
//  // courses$: Observable<Course[]>;
//   courses: Course[];
//     constructor(private coursesSevice: CoursesService,
//    @Inject(CONFIG_TOKEN) private config: AppConfig) {
//   }
//   ngOnInit() {
//     this.coursesSevice.loadCourses()
//     .subscribe(
//       courses => this.courses = courses
//     );
//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }
//   // onEditCourse() {
//   //   this.courses[0].description = 'New Value';
//   // }
//   onEditCourse() {

//   }
// }
// OnPush Change Detection and Observables Data Streams
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class AppComponent implements OnInit {
//   courses$: Observable<Course[]>;
//   // courses: Course[];
//     constructor(private coursesSevice: CoursesService,
//    @Inject(CONFIG_TOKEN) private config: AppConfig) {
//   }
//   ngOnInit() {
//    this.courses$ = this.coursesSevice.loadCourses();
//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }
//   // onEditCourse() {
//   //   this.courses[0].description = 'New Value';
//   // }
//   onEditCourse() {

//   }
// }
// Angular Custom Change Detection with ChangeDetectorRef
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class AppComponent implements OnInit {
//   // courses$: Observable<Course[]>;
//    courses: Course[];
//     constructor(private coursesSevice: CoursesService,
//    @Inject(CONFIG_TOKEN) private config: AppConfig,
//    private cd: ChangeDetectorRef) {
//   }
//   ngOnInit() {
//    // this.courses$ = this.coursesSevice.loadCourses();
//    this.coursesSevice.loadCourses().subscribe( courses => {
//      this.courses = courses;
//      this.cd.markForCheck();
//    });

//   }
//   save(course: Course) {
//     this.coursesSevice.saveCourse(course)
//     .subscribe(
//       () => console.log('Course Saved!')
//     );
//   }
//   // onEditCourse() {
//   //   this.courses[0].description = 'New Value';
//   // }
//   onEditCourse() {

//   }
// }
// Angular Custom Change Detection with ChangeDetectorRef
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses: Course[];
    constructor(private coursesSevice: CoursesService,
   @Inject(CONFIG_TOKEN) private config: AppConfig) {
  }
  ngOnInit() {
   // this.courses$ = this.coursesSevice.loadCourses();
   this.coursesSevice.loadCourses().subscribe( courses => {
   this.courses = courses;
   });

  }
  save(course: Course) {
    this.coursesSevice.saveCourse(course)
    .subscribe(
      () => console.log('Course Saved!')
    );
  }

  onEditCourse() {
    this.courses[0].category = 'ADVANCED';
    console.log('called');
  }
}