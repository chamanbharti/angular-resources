import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class CoursesService {
//   constructor(private http: HttpClient) {}

// Angular Custom Services - Fetching  Data
// loadCourses(): Observable<Course[]> {
//     const params = new HttpParams()
//     .set('page', '1')
//     .set('pageSize', '10');
//     return this.http.get<Course[]>('/api/courses', {params});

// }

// Angular Custom Service - Data Modification with an HTTP PUT
// loadCourses(): Observable<Course[]> {
//   const params = new HttpParams()
//   .set('page', '1')
//   .set('pageSize', '10');
//   return this.http.get<Course[]>('/api/courses', {params});

// }
// saveCourse(course: Course) {
//   debugger
//   return this.http.put(`/api/courses/${course.id}`, course);
// }
// }
// Angular Custom Service - Data Modification with an HTTP PUT
// loadCourses(): Observable<Course[]> {
//   const params = new HttpParams()
//   .set('page', '1')
//   .set('pageSize', '10');
//   return this.http.get<Course[]>('/api/courses', {params});

// }
// saveCourse(course: Course) {
//   const headers = new HttpHeaders()
//   .set('X-Auth', 'userId');
//   return this.http.put(`/api/courses/${course.id}`, course, {headers});
// }

// Angular DI - Understanding Providers and Injection Tokens
// @Injectable({
//   providedIn: 'root'
// })
//  @Injectable()
// export class CoursesService {
//   constructor(private http: HttpClient) {}
// loadCourses(): Observable<Course[]> {
//   const params = new HttpParams()
//   .set('page', '1')
//   .set('pageSize', '10');
//   return this.http.get<Course[]>('/api/courses', {params});

// }
// saveCourse(course: Course) {
//   const headers = new HttpHeaders()
//   .set('X-Auth', 'userId');
//   return this.http.put(`/api/courses/${course.id}`, course, {headers});
// }
// }
  // // Understanding Hierarchical Dependency Injection
  // let counter = 0;
  // @Injectable()
  // export class CoursesService {
  //   id: number;
  //   constructor(private http: HttpClient) {
  //     counter++;
  //     this.id = counter;
  //    // console.log('create CoursesService ' + counter);
  //   }
  // loadCourses(): Observable<Course[]> {
  //   const params = new HttpParams()
  //   .set('page', '1')
  //   .set('pageSize', '10');
  //   return this.http.get<Course[]>('/api/courses', {params});
  // }
  // saveCourse(course: Course) {
  //   const headers = new HttpHeaders()
  //   .set('X-Auth', 'userId');
  //   return this.http.put(`/api/courses/${course.id}`, course, {headers});
  // }
  // }
  // // Understanding Hierarchical Dependency Injection
  // let counter = 0;
  // @Injectable({
  //   // providedIn: 'root',
  //   // useFactory: (http) => new CoursesService(http),
  //   // deps: [HttpClient]
  //   // providedIn: 'root',
  //   // useClass: CoursesService
  //   providedIn: 'root'
  // })
  // export class CoursesService {
  //   id: number;
  //   constructor(private http: HttpClient) {
  //     counter++;
  //     this.id = counter;
  //    // console.log('create CoursesService ' + counter);
  //   }
  // loadCourses(): Observable<Course[]> {
  //   const params = new HttpParams()
  //   .set('page', '1')
  //   .set('pageSize', '10');
  //   return this.http.get<Course[]>('/api/courses', {params});
  // }
  // saveCourse(course: Course) {
  //   const headers = new HttpHeaders()
  //   .set('X-Auth', 'userId');
  //   return this.http.put(`/api/courses/${course.id}`, course, {headers});
  // }
  // }
//  // Angular DI Decorators - Optional, Self, SkipSelf
//  let counter = 0;
//  @Injectable()
//  export class CoursesService {
//    id: number;
//    constructor(private http: HttpClient) {
//      counter++;
//      this.id = counter;
//    }
//  loadCourses(): Observable<Course[]> {
//    const params = new HttpParams()
//    .set('page', '1')
//    .set('pageSize', '10');
//    return this.http.get<Course[]>('/api/courses', {params});
//  }
//  saveCourse(course: Course) {
//    const headers = new HttpHeaders()
//    .set('X-Auth', 'userId');
//    return this.http.put(`/api/courses/${course.id}`, course, {headers});
//  }
//  }
// Angular DI Decorators - Optional, Self, SkipSelf
// Self
let counter = 0;
@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CoursesService {
  id: number;
  constructor(private http: HttpClient) {
    counter++;
    this.id = counter;
  }
loadCourses(): Observable<Course[]> {
  const params = new HttpParams()
  .set('page', '1')
  .set('pageSize', '10');
  return this.http.get<Course[]>('/api/courses', {params});
}
saveCourse(course: Course) {
  const headers = new HttpHeaders()
  .set('X-Auth', 'userId');
  return this.http.put(`/api/courses/${course.id}`, course, {headers});
}
}
