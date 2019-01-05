import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../Services/logging.service';
import {AccountsService} from '../Services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers : [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountService: AccountsService) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.ChangeStatus(this.id, status);
    // this.loggingService.logChangingStatuse(status);
  }
}