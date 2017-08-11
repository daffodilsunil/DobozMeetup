import { Component, OnInit, Input } from '@angular/core';
import { ToastMessageModel } from './toast-message.model';

@Component({
  selector: 'toast-message-component',
  styleUrls: ['../../bootstrap/dist/css/bootstrap.min.css',
    './toast-message-component.component.scss'],
  templateUrl: './toast-message-component.component.html'

})
export class ToastMessageComponentComponent implements OnInit {

  constructor() { }
  @Input() alerts: ToastMessageModel[] = [];

  ngOnInit() {
  }

  closeAlert(alert: any) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
