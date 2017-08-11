# Angular toast message service

Show toast messages from anywhere in your angular application.
Can be used in Angular 2 and 4 projects as well.

## Usage

app.module.ts:
```
import { BootstrapAlertService } from "ng2-alert-service/bootstrap-alert.service";
import { BootstrapAlertModule } from 'ng2-alert-service/bootstrap-alert.module';

...

imports: [
    ...
    BootstrapAlertModule
  ],
  providers: [BootstrapAlertService],

```


app.component.ts:
```
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';
import { ToastMessageModel } from 'ng2-alert-service/toast-message-component/toast-message.model';

constructor(private bootstrapAlertService: BootstrapAlertService) {

}

messageList: ToastMessageModel[] = [];

ngOnInit() { 
    this.bootstrapAlertService.getAlertEvent().subscribe(r => {
      this.messageList.push(r);
    });
}

```


app.component.html:
```
<toast-message-component [alerts]="messageList"></toast-message-component>
```


You can now throw messages from anywhere you like, for example from a service:
```
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';

constructor(private bootstrapAlertService: BootstrapAlertService) {

}

this.bootstrapAlertService.showError('This is an error!');

    
this.bootstrapAlertService.showInfo('This is an info!');

    
this.bootstrapAlertService.showWarning('This is a warning!');

    
this.bootstrapAlertService.showSucccess('This is a success message!');

```