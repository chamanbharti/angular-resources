import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  constructor(private loggingService: LoggingService,
    private accountService: AccountService) {
      this.accountService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      );
    }


  ngOnInit(): void {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    // using service but not recommended this type of code
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // using DI
    this.accountService.addAccount(accountName, accountStatus);
   // this.loggingService.logStatusChange(accountStatus);
  }

}
