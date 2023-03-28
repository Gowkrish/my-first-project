import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerTwoComponent } from './server-two/server-two.component';
import { WarningAlertCompComponent } from './warning-alert-comp/warning-alert-comp.component';
import { SuccessAlertCompComponent } from './success-alert-comp/success-alert-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerTwoComponent,
    WarningAlertCompComponent,
    SuccessAlertCompComponent
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
