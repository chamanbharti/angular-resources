import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpObservableComponent } from './http-observable/http-observable.component';

@NgModule({
  declarations: [HttpObservableComponent],
  imports: [
    CommonModule
  ],
  exports: [HttpObservableComponent]
})
export class UxtrendzModule { }
