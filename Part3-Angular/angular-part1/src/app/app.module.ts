import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ParentComponentComponent } from './basics/component-communication/input-ouput/parent-component/parent-component.component';
import { ChildComponentComponent } from './basics/component-communication/input-ouput/child-component/child-component.component';
import { SchoolComponent } from './basics/component-communication/view-child/school/school.component';
import { TeacherComponent } from './basics/component-communication/view-child/teacher/teacher.component';
import { SchoolmasterComponent } from './basics/component-communication/view-children/schoolmaster/schoolmaster.component';
import { TeachermasterComponent } from './basics/component-communication/view-children/teachermaster/teachermaster.component';
import { AlertComponent } from './basics/component-communication/view-children/alert/alert.component';
import { JokeListComponent } from './basics/component-communication/view-children/joke-list/joke-list.component';
import { HelloComponent } from './basics/directive-deep-dive/hello/hello.component';
import { BasicHighlightDirective } from './basics/directive-deep-dive/basic-highlight.directive';
import { BetterHighlightDirective } from './basics/directive-deep-dive/better--highlight.directive';
import { UnlessDirective } from './basics/directive-deep-dive/unless.directive';
import { AccountComponent } from './basics/Service-DI/account/account.component';
import { NewAccountComponent } from './basics/Service-DI/new-account/new-account.component';
import { AccountService } from './basics/Service-DI/account.service';
import { LoggingService } from './basics/Service-DI/logging.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    SchoolComponent,
    TeacherComponent,
    SchoolmasterComponent,
    TeachermasterComponent,
    AlertComponent,
    JokeListComponent,
    HelloComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
