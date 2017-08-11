import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BootstrapAlertService } from "ng2-alert-service/bootstrap-alert.service";
import { BootstrapAlertModule } from 'ng2-alert-service/bootstrap-alert.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BootstrapAlertModule
  ],
  providers: [BootstrapAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
