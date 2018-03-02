import { Component, OnInit, Input } from '@angular/core';
import { ToastMessageModel } from './toast-message.model';

@Component({
  selector: 'toast-message-component',
  styles: [`div.floating-alert{
                position: fixed;
                right: 1%;
                top: 1em;
                z-index: 10;
              button{
                  margin-left: 20px;
              }
            }`],
  template: `<div class="floating-alert">
                <div class="alert alert-{{alertObject.type}}" *ngFor="let alertObject of alerts">
                  <button class="close" data-dismiss="alert" aria-label="close" title="close" (click)="closeAlert(alertObject)">  <span aria-hidden="true">&times;</span></button>    {{alertObject.message}}
                </div>
              </div>`

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
