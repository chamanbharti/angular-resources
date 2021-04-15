import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './hello/hello.component';
import { ColumnHeaderComponent } from './column-header/column-header.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ColumnHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    // AgGridModule.withComponents([null])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
