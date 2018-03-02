import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'file-uploader',
    template: `<div class="btn-toolbar mb-3" role="toolbar">
    <div class="input-group">
        <div class="input-group-prepend">
            <label class="btn btn-primary">
                <span>Browse</span>...
                <input type="file" accept="{{fileType}}" style="display: none;" (change)="fileChange($event)" [attr.multiple]="allowMultiple">
            </label>
        </div>
        <input type="text" class="form-control" [value]="DisplayedText" disabled="" [class.ng-invalid-right]="required && !DisplayedText"
            [class.ng-valid-right]="required && DisplayedText">
    </div>
</div>`,    
    styles: [`
        label.btn{  margin: 0;}`]
})
export class FileUploaderComponent {
    @Input() allowMultiple: boolean;
    @Input() fileType: string;
    @Input() required: boolean;
    @Input() maxSizeInKb: number;
    @Output() onSelection = new EventEmitter<FileList>();
    DisplayedText: string = "";

    fileChange(event: any) {
        let fileList: FileList = event.target.files;
        let filetypeToCompare = this.fileType.replace('*', '');

        let hasFile = fileList && fileList.length > 0;

        if (hasFile) {
            if (filetypeToCompare != "application/" && fileList[0].type.indexOf(filetypeToCompare) == -1) {
                fileList = null;
                this.DisplayedText = "";
            }
            else {
                if (this.maxSizeInKb)
                    for (let i = 0; i < fileList.length; i++) {
                        if (fileList[i].size > this.maxSizeInKb * 1024) {
                            alert(`File size is more than ${this.maxSizeInKb} Kb`);
                            fileList = null;
                            this.DisplayedText = "";
                            return false;
                        }
                    }

                let multipleFile = fileList.length > 1;

                if (multipleFile) {
                    this.DisplayedText = fileList.length + ' file(s) has been selected';
                }
                else {
                    let file: File = fileList[0];
                    this.DisplayedText = file.name;
                }
            }

            this.onSelection.emit(fileList);
        }
    }
};
