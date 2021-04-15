import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Get1Component } from "./get-method/get1/get1.component";
import { FormDataComponent } from "./get-method/form-data/form-data.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookService } from "./service/book.service";
import { PromiseComponent } from './get-method/promise/promise.component';
import { ObservableComponent } from './get-method/observable/observable.component';

@NgModule({
    declarations: [Get1Component, FormDataComponent, PromiseComponent, ObservableComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    exports: [Get1Component, FormDataComponent, PromiseComponent, ObservableComponent],
    providers: [BookService]
  })
  export class ConcretepageModule { }