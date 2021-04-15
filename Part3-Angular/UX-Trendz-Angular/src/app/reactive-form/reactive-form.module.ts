import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReactiveBasicFormComponent } from './reactive-basic-form/reactive-basic-form.component';
import { SignupComponent } from './model-driven/signup/signup.component';


@NgModule({
  declarations: [CheckboxComponent, BasicFormComponent, ReactiveBasicFormComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckboxComponent
  ]
})
export class ReactiveFormModule { }
