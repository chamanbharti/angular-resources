import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopnavComponent } from './my-container/topnav/topnav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { Txtsec1Component } from './my-container/txtsec1/txtsec1.component';
import { Txtsec2Component } from './my-container/txtsec2/txtsec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { TwoWayComponent } from './databind/two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {CarouselModule} from 'ngx-bootstrap';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { ServiceUtitlitiesService } from './appServices/service-utitlities.service';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TestDirective } from './appDirectives/test.directive';
import {AppRoutingModule} from './app.routing.module';
import {ReactiveFormRoutingModule} from './reactive-form/reactive-form-routing.module';
import {ReactiveFormModule} from './reactive-form/reactive-form.module';
import { JsonConversionComponent } from './json-conversion/json-conversion.component';
import {ProductsService} from './appServices/products.service';
import {CrudOneComponent} from './crud-one/crud-one.component';
import {CrudTwoComponent} from './crud-two/crud-two.component';
import { RxjsWorksModule } from './rxjs-works/rxjs-works.module';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgSwitchComponent,
    NgForComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    PageNotFoundComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    Card2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ViewChildComponent,
    TestDirective,
    JsonConversionComponent,
    CrudOneComponent,
    CrudTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormModule,
    ReactiveFormRoutingModule,
    RxjsWorksModule
  ],
  providers: [ServiceUtitlitiesService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
   // console.log('AppModule loaded');
  }
}
