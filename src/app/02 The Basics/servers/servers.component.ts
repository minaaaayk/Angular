import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  AllowNewServer = true; // active button
  Allow =  false; // Allow to Show Create
  Create = 'No New Server '; // Sentenses
  Name = ""; // name of new server
  ServerS = ['S1', 'S2']
  onCreate() {
    this.Allow = true;
    this.ServerS.push(this.Name);
    this.Create = 'The Server ' + this.Name + ' Created';
  }
  constructor() {
    setTimeout(() => {
      this.AllowNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }

}
