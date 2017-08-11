import { NgModule } from '@angular/core';
import { BootstrapAlertService } from "./bootstrap-alert.service";
import { ToastMessageComponentComponent } from './toast-message-component/toast-message-component.component';
import { CommonModule } from '@angular/common';

@NgModule({
 imports: [CommonModule],

  declarations: [ToastMessageComponentComponent],
  exports:[
    ToastMessageComponentComponent
  ],
  providers:[BootstrapAlertService]
})
export class BootstrapAlertModule { }
