import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation,
    Inject,
    Optional,
    Self,
    SkipSelf,
    ChangeDetectionStrategy,
    Attribute,
    ChangeDetectorRef,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    DoCheck
} from '@angular/core';
import {Course} from '../model/course';
import { CoursesService } from '../services/courses.service';
// import { COURSES_SERVICE } from '../app.component';

// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css'],
//     // Angular DI Decorators - Self
//   //  providers: [ CoursesService ]
//    // Angular DI Decorators - Host
//    providers: [ CoursesService ]
// })
// export class CourseCardComponent implements OnInit {

//     @Input()
//     course: Course;

//     @Input()
//     cardIndex: number;

//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();


//     // constructor(private coursesService: CoursesService) {}
//     // constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {}
//     // constructor(private coursesService: CoursesService) {}
//      // Angular DI Decorators - Optional, Self, SkipSelf
//     // constructor(@Self() private coursesService: CoursesService) {}
//     // Angular DI Decorators - Optional, Self, SkipSelf
//     // constructor(@SkipSelf() private coursesService: CoursesService) {}
//     constructor(private coursesService: CoursesService) {}

//     ngOnInit() {
//     // console.log('coursesService course card' + this.coursesService);
//     // console.log('coursesService course card' + this.coursesService.id);
//     }


//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});

//     }
// }
// // Angular Default Change Detection - How does it Work?
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css']
// })
// export class CourseCardComponent implements OnInit {

//     @Input()
//     course: Course;

//     @Input()
//     cardIndex: number;

//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
//     constructor(private coursesService: CoursesService) {}

//     ngOnInit() {
//     }


//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});

//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// Angular OnPush Change Detection - How does it Work?
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CourseCardComponent implements OnInit {

//     @Input()
//     course: Course;

//     @Input()
//     cardIndex: number;

//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
//     constructor(private coursesService: CoursesService) {}

//     ngOnInit() {
//     }


//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});

//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// OnPush Change Detection and Observables Data Streams
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css']
// })
// export class CourseCardComponent implements OnInit {

//     @Input()
//     course: Course;

//     @Input()
//     cardIndex: number;

//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
//     constructor(private coursesService: CoursesService) {}

//     @Input()
//     type;
//     ngOnInit() {
//     }


//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});

//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// Angular Attribute Decorator - When to use it?
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CourseCardComponent implements OnInit {

//     @Input()
//     course: Course;

//     @Input()
//     cardIndex: number;

//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
    
//     // @Input()
//     // type;
//     // constructor(private coursesService: CoursesService) {
//     //         console.log(this.type);
//     //     }
//     constructor(private coursesService: CoursesService,
//         @Attribute('type') private type: string) {
//             console.log(type);
//         }


//     ngOnInit() {
//         console.log(this.type);
//     }


//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});

//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// Angular Custom Change Detection with ChangeDetectorRef
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CourseCardComponent implements OnInit {

//     @Input()
//     course: Course;

//     @Input()
//     cardIndex: number;

//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
    
//     // @Input()
//     // type;
//     // constructor(private coursesService: CoursesService) {
//     //         console.log(this.type);
//     //     }
//     constructor(private coursesService: CoursesService,
//         @Attribute('type') private type: string,
//         private cd: ChangeDetectorRef) {
//             console.log(type);
//         }


//     ngOnInit() {
//         console.log(this.type);
//     }


//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});

//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// Angular Lifecycle Hooks - OnInit and OnDestroy In Detail
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CourseCardComponent implements OnInit {
//     @Input()
//     course: Course;
//     @Input()
//     cardIndex: number;
//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
//     //     }
//     constructor(private coursesService: CoursesService,
//         @Attribute('type') private type: string) {
//             console.log('constructor', this.course);
//         }
//     ngOnInit() {
//         console.log('ngOnInit',this.course);
//     }
//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});
//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// Angular Lifecycle Hooks - OnDestroy In Detail
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CourseCardComponent implements OnInit, OnDestroy {
//     @Input()
//     course: Course;
//     @Input()
//     cardIndex: number;
//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
//     constructor(private coursesService: CoursesService,
//         @Attribute('type') private type: string) {
//             console.log('constructor', this.course);
//         }
//     ngOnInit() {
//         console.log('ngOnInit', this.course);
//     }
//     ngOnDestroy() {
//         console.log(' ngOnDestroy()', this.course);
//     }
//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});
//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// // Angular OnChanges Lifecycle Hook
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CourseCardComponent implements OnInit, OnDestroy, OnChanges {
//     @Input()
//     course: Course;
//     @Input()
//     cardIndex: number;
//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
//     constructor(private coursesService: CoursesService,
//         @Attribute('type') private type: string) {
//             console.log('constructor', this.course);
//         }
//     // ngOnChanges() {
//     //     console.log('ngOnChanges'); 
//     // }
//     ngOnChanges(changes) {
//         console.log('ngOnChanges', changes);
//     }
//     ngOnInit() {
//         console.log('ngOnInit', this.course);
//     }
//     ngOnDestroy() {
//         console.log(' ngOnDestroy()', this.course);
//     }
//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});
//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// // Angular AfterContentChecked Lifecycle Hook - Use Cases and Pitfalls
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked {
//     @Input()
//     course: Course;
//     @Input()
//     cardIndex: number;
//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
//     constructor(private coursesService: CoursesService,
//         @Attribute('type') private type: string) {
//             console.log('constructor', this.course);
//         }
//     // ngOnChanges() {
//     //     console.log('ngOnChanges'); 
//     // }
//     ngOnChanges(changes) {
//         console.log('ngOnChanges', changes);
//     }
//     ngOnInit() {
//         console.log('ngOnInit', this.course);
//     }
//     ngAfterContentChecked() {
//         console.log('ngAfterContentChecked');
//         this.course.description = 'ngAfterContentChecked';
//         this.course.category = 'ADVANCED';
//         this.course.iconUrl = '';
//     }
//     ngOnDestroy() {
//         console.log(' ngOnDestroy()', this.course);
//     }
//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});
//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// // Angular AfterViewChecked Lifecycle Hook - Use Cases and Pitfalls
// @Component({
//     selector: 'course-card',
//     templateUrl: './course-card.component.html',
//     styleUrls: ['./course-card.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, 
// AfterContentChecked, AfterViewChecked {
//     @Input()
//     course: Course;
//     @Input()
//     cardIndex: number;
//     @Output('courseChanged')
//     courseEmitter = new EventEmitter<Course>();
//     constructor(private coursesService: CoursesService,
//         @Attribute('type') private type: string) {
//             console.log('constructor', this.course);
//         }
//     // ngOnChanges() {
//     //     console.log('ngOnChanges'); 
//     // }
//     ngOnChanges(changes) {
//         console.log('ngOnChanges', changes);
//     }
//     ngOnInit() {
//         console.log('ngOnInit', this.course);
//     }
//     ngAfterContentChecked() {
//         console.log('ngAfterContentChecked');
//         this.course.description = 'ngAfterContentChecked';
//         this.course.category = 'ADVANCED';
//        // this.course.iconUrl = '';
//     }
//     ngAfterViewChecked() {
//         console.log('ngAfterViewChecked');
//         this.course.description = 'ngAfterViewChecked';
//     }
//     ngOnDestroy() {
//         console.log(' ngOnDestroy()', this.course);
//     }
//     onSaveClicked(description: string) {

//         this.courseEmitter.emit({...this.course, description});
//     }
//     onTitleChanged(newTitle: string) {
//         this.course.description = newTitle;
//     }
// }
// Angular Lifecycle Hooks - Complete Overview
@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, 
OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck {
    @Input()
    course: Course;
    @Input()
    cardIndex: number;
    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();
    constructor(private coursesService: CoursesService,
        @Attribute('type') private type: string) {
            console.log('constructor', this.course);
        }
    // ngOnChanges() {
    //     console.log('ngOnChanges');
    // }
    ngOnChanges(changes) {
        console.log('ngOnChanges', changes);
    }
    ngOnInit() {
        console.log('ngOnInit', this.course);
    }
    ngDoCheck() {
        console.log('ngDoCheck');
    }
    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }
    ngOnDestroy() {
        console.log(' ngOnDestroy()', this.course);
    }
    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});
    }
    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }
}