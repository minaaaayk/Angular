import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'server',
    name: 'Server1',
    content: 'test'
  }];

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
}
