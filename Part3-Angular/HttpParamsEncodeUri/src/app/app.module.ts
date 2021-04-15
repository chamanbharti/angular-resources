import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassArrayInFuctionComponent } from './pass-array-in-fuction/pass-array-in-fuction.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpPostComponent } from './http-post/http-post.component';
import { HttpGetComponent } from './http-get/http-get.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDataComponent } from './form-data/form-data.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { PromiseComponent } from './promise/promise.component';

@NgModule({
  declarations: [
    AppComponent,
    PassArrayInFuctionComponent,
    HttpPostComponent,
    HttpGetComponent,
    FormDataComponent,
    UploadFileComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
