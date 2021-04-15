import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ParentComponent} from './parent/parent.component';
import {ViewChildComponent} from './view-child/view-child.component';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const appRoutes: Routes = [
  {path: 'login', redirectTo: 'login',  pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', loadChildren: './products/products.module#ProductsModule'},
  {path: 'contact', component: ContactComponent},
  {path: 'buy-products', component: ParentComponent},
  {path: 'view-child', component: ViewChildComponent}
]
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule loaded');
  }
}
