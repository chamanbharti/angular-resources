import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 2000 }),
    // AppRoutingModule, //order matters
    // RouterModule.forRoot([
    //   {path: 'welcome', component: WelcomeComponent},
    //   {path: '', redirectTo:'welcome', pathMatch: 'full'},
    //   {path: '**', component: PageNotFoundComponent}
    // ], 
    // //  {useHash: true} //for hash based url
    // ),
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
