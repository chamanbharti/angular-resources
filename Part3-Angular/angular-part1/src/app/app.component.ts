import { Component, OnInit } from '@angular/core';
import { AccountService } from './basics/Service-DI/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `]
})
export class AppComponent  implements OnInit{
  // servers = [];
  // onAddServer() {
  //   this.servers.push('Another Server');
  // }
  // onRemoveServer(id: number) {
  //   const position = id; // + 1;
  //   console.log(id);
  //   this.servers.splice(position, 1);
  // }

  // section-5
  // serverElements = [{type: 'server', name: 'testserver', content: 'just a test!'}];
  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  // onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }
  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed';
  // }
  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }

  // section-9 service-dependency injection
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];
  // replaced with service

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // } 
  accounts: {name: string, status: string}[] = [];
  constructor(private accountService: AccountService) {}
  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
