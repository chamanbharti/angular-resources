import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { CoursesService } from './services/courses.service';
import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { UxtrendzModule } from './uxtrendz/uxtrendz.module';
import { ConcretepageModule } from './concretepage/concretepage.module';
import { UdemyHttpModule } from './udemy-http/udemy-http.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    LifeCycleComponent,
    FilterByCategoryPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConcretepageModule,
    UxtrendzModule,
    UdemyHttpModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
