import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changeSaved = false;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // console.log(this.route);
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    // console.log(this.route.snapshot.params);
    // this.route.queryParams.subscribe();
    // this.route.fragment.subscribe();
    // this.server = this.serversService.getServer(1);
    // this.serverName = this.server.name;
    // this.serverStatus = this.server.status;

    //
    console.log(this.route);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    console.log(this.route.snapshot.params);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(1);
    this.server = this.serversService.getServer(id);
    // subscribe route params to update the id if params change
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ( !this.allowEdit) {
      return true;
    }
    if ( (this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changeSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
