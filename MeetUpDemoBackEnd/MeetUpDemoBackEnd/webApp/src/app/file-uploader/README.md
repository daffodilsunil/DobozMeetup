# Angular 4 File Uploader

[Github](https://github.com/speti43/DobozMeetup/tree/master/MeetUpDemoBackEnd/MeetUpDemoBackEnd/webApp/src/shared)

[Demo](https://raw.githubusercontent.com/speti43/DobozMeetup/master/MeetUpDemoBackEnd/MeetUpDemoBackEnd/webApp/src/shared/demo.png)

## Install
```
npm i ng4-file-upload@latest --save
```
## Usage

app.module.ts:
```
import { FileUploaderModule } from "ng4-file-upload/file-uploader.module";

...
imports: [
    ...
    FileUploaderModule
  ]

```

app.component.ts:
```

fileuploaderFileChange(event){

}

```

app.component.html:
```
<file-uploader [maxSizeInKb]="110" [allowMultiple]="false" [fileType]="'application/*'" 
(onSelection)="fileuploaderFileChange($event)"  [required]="false"></file-uploader>
```
