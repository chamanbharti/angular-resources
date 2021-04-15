import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateForm1Component } from './template-form/template-form1/template-form1.component';
import { TemplateForm2Component } from './template-form/template-form2/template-form2.component';
import { TemplateForm3Component } from './template-form/template-form3/template-form3.component';
import { TemplateForm0Component } from './template-form/template-form0/template-form0.component';
import { TemplateForm4Component } from './template-form/template-form4/template-form4.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateForm1Component,
    TemplateForm2Component,
    TemplateForm3Component,
    TemplateForm0Component,
    TemplateForm4Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
