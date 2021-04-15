import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {BasicFormComponent} from './basic-form/basic-form.component';
import {ReactiveBasicFormComponent} from './reactive-basic-form/reactive-basic-form.component';
import {SignupComponent} from './model-driven/signup/signup.component';


const routes: Routes = [
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'basicForm', component: BasicFormComponent},
  { path: 'reactiveForm', component: ReactiveBasicFormComponent},
  { path: 'model-driven', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
