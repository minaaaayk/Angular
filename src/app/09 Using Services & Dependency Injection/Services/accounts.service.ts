import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  public accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor(private loggingService: LoggingService) { }
  AddAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logChangingStatuse(status);
  }

  ChangeStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logChangingStatuse(newStatus);
  }
}
