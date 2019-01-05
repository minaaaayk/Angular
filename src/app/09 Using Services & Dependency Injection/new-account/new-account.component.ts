import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../Services/logging.service';
import {AccountsService} from '../Services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    /*this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/
    this.accountService.AddAccount(accountName, accountStatus);
    // this.loggingServise.logChangingStatuse(accountStatus);
  }
}
