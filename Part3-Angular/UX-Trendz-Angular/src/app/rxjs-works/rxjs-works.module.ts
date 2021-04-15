import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FromEventComponent } from './from-event/from-event.component';
import { CallbackComponent } from './callback/callback/callback.component';
import { ObservableComponent } from './observable/observable.component';



@NgModule({
  declarations: [PromiseComponent, AsyncAwaitComponent, FromEventComponent, CallbackComponent, ObservableComponent],
  imports: [
    CommonModule
  ],
  exports: [PromiseComponent]
})
export class RxjsWorksModule { }
