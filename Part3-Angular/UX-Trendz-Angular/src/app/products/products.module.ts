import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LaptopComponent} from './laptop/laptop.component';
import {MobileComponent} from './mobile/mobile.component';
import {TVComponent} from './tv/tv.component';
import {WashingMachineComponent} from './washing-machine/washing-machine.component';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {DropdownDirective} from '../appDirectives/dropdown.directive';
const proRoutes = [
        {
          path: 'laptop', component: LaptopComponent, children: [
            {path: 'mobile', component: MobileComponent},
            {path: 'washing-machine', component: WashingMachineComponent},
            {path: 'tv', component: TVComponent},
            // {path: '**', component: PageNotFoundComponent}
          ]
        }
]


@NgModule({
  declarations: [
    LaptopComponent,
    MobileComponent,
    TVComponent,
    WashingMachineComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proRoutes)
  ]
})
export class ProductsModule {
  constructor() {
    console.log('ProductsModule loaded');
}
}
