import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  // {path: '', component: HomeComponent}, // localhost:4200/users
  // {path: 'users', component: UsersComponent},
  // {path: 'users/:id/:name', component: UserComponent},
  // {path: 'servers', component: ServersComponent},
  // {path: 'servers/:id', component: ServerComponent},
  // {path: 'servers/:id/edit', component: EditServerComponent}

  // using child routes
  {path: '', component: HomeComponent}, // localhost:4200/users
  {
    path: 'users', component: UsersComponent,
  children:
    [
      {path: ':id/:name', component: UserComponent},
    ]
  },
  {path: 'servers',
  // canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  component: ServersComponent,
  children:
    [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]
  },
  // {
  //   path: 'not-found', component:
  // },
  {
    path: 'not-found', component: ErrorPageComponent,
    data: {message: 'Page not found!'}
  },
  // {
  //   path: 'something', redirectTo: '/not-found'
  // }
  {
    path: '**', redirectTo: '/not-found'
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent ,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
