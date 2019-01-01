import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName = "نام کاربری";
  Password = "کلمه عبور";
  result = "نام کاربری اشتباه است";
  Allow = false;
  users = ['minaaaayk', 'hello','aliiii']
  constructor() { }
  CheckUserName(event: Event) {
    for (let user of this.users) {
      if ((<HTMLTextAreaElement>event.target).value === user) {
        this.result = "";
        return;
      }
      this.Allow =  true;
      this.result = "نام کاربری اشتباه است";
    }

    return false;
  }
  ngOnInit() {
  }

}
