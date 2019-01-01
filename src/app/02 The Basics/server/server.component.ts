import {Component} from '@angular/core';
import {style} from "@angular/animations";


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverID = 10;
  ServerStatus = 'Offline';
  constructor() {
    this.ServerStatus = Math.random() > 0.5 ? 'OnLine' : 'OffLine';
  }
  getColor() {
    return this.ServerStatus === 'OnLine' ? 'green' : 'red';
  }
  GetserverStatus() {
    return this.ServerStatus;
  }
}
