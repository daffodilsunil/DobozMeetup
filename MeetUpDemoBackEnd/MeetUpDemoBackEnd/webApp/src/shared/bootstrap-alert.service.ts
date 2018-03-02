import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ToastMessageModel } from './toast-message-component/toast-message.model';

@Injectable()
export class BootstrapAlertService {

  constructor() { }
  messageId: number = 0;
  private alertEvent: Subject<ToastMessageModel> = new Subject();

  getAlertEvent() {
    return this.alertEvent.asObservable();
  }

  showSucccess(message: string) {
    this.showToast("success", message);
  }

  showInfo(message: string) {
    this.showToast("info", message);
  }

  showWarning(message: string) {
    this.showToast("warning", message);
  }

  showError(message: string) {
    this.showToast("danger", message);
  }

  showToast(level: string, message: string) {
    let toast: ToastMessageModel = {
      id: this.messageId++,
      type: level,
      message: message,
      messageLocalized: ""
    }

    this.alertEvent.next(toast);
  }

}
