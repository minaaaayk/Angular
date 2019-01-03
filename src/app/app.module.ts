import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerComponent} from "./02 The Basics/server/server.component";
import {FormsModule} from "@angular/forms";
import { ServersComponent } from './02 The Basics/servers/servers.component';
import { LoginComponent } from './login/login.component';
import { CokpitComponent } from './05 Components & Databinding Deep Dive/cokpit/cokpit.component';
import { ServerElementComponent } from './05 Components & Databinding Deep Dive/server-element/server-element.component';
import { MyDirectionDirective } from './07 Directives Deep Dive/my-direction.directive';
import { UnlessDirective } from './07 Directives Deep Dive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LoginComponent,
    CokpitComponent,
    ServerElementComponent,
    MyDirectionDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
