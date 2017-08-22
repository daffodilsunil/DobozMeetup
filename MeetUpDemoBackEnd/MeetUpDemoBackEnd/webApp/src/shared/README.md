# Angular 4 toast message service

Excuse me for the misleading package name.
**This package is not compatible with Angular 2!**

Show toast messages (bootstrap alerts) from anywhere in your angular application.
Can be used in Angular 4 projects.

[Github](https://github.com/speti43/DobozMeetup/tree/master/MeetUpDemoBackEnd/MeetUpDemoBackEnd/webApp/src/shared)

[Demo](https://raw.githubusercontent.com/speti43/DobozMeetup/master/MeetUpDemoBackEnd/MeetUpDemoBackEnd/webApp/src/shared/demo.png)

## Install
```
npm i ng2-alert-service@latest --save
```
## Usage

app.module.ts:
```
import { BootstrapAlertModule } from 'ng2-alert-service/bootstrap-alert.module';
...
imports: [
    ...
    BootstrapAlertModule
  ]

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

someMethod(){
    this.bootstrapAlertService.showError('This is an error!');    
    this.bootstrapAlertService.showInfo('This is an info!');    
    this.bootstrapAlertService.showWarning('This is a warning!');    
    this.bootstrapAlertService.showSucccess('This is a success message!');
}

```