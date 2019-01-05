import { Component, OnInit } from '@angular/core';
import {AccountsService} from './09 Using Services & Dependency Injection/Services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  serverElements = [{
    type: 'server',
    name: 'Server1',
    content: 'test'
  }];


  /*..... 09.............................*/
  accounts: {name: string, status: string}[] = [];
  constructor(private accountService: AccountsService) {}
  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
  /*..... 09.............................*/


  /*.........05........................*/
  AddServer(event: {serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: event.serverName,
      content: event.serverContent
    });
  }
  AddBlueprint(event: {serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.serverName,
      content: event.serverContent
    });
  }
  /* ........ 05......................*/


}
