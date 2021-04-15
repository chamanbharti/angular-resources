import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { SingleDropdownComponent } from './dropdown/single-dropdown/single-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SingleDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
