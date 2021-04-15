import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { IconComponent } from './components/icon/icon.component';
import { HttpClientModule } from '@angular/common/http';
import { BadgesComponent } from './components/badges/badges.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    DatePickerComponent,
    IconComponent,
    BadgesComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
