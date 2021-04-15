import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  username = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  showSecret = false;
  log = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;

  }
  onUpdateServerName(event: any) {
    console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event.target.value);
  }
  onReset() {
    this.username = '';
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
   // this.log.push(this.log.length + 1);
   this.log.push(new Date());
  }
}
