import { Component, OnInit } from '@angular/core';

import {FileUploadService} from './file-upload.service'
import {Message} from './message.model'


@Component({
  selector: 'abnt-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {

  messages: Message[] = []
  detailLinkLabel: string
  uploaded:boolean = false
  formData:FormData = new FormData();

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {}

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0]
        this.formData.append('file', file, file.name);
        this.uploaded = true
    } else {
      this.uploaded = false
    }
  }

  sendFile() {
    this.fileUploadService.sendFile(this.formData)
            .subscribe(fileName => this.showErrorMessages(fileName['file']))
  }


  showErrorMessages(fileName: string) {
    console.log(fileName)
    this.fileUploadService.showErrorMessages(fileName)
                          .subscribe(messages => this.messages = messages)
  }

  showDetail(m: Message) {
    m.showDetail = (m.showDetail === undefined || !m.showDetail) ? true: false

    m.detailLinkLabel = m.showDetail ? 'Ocultar': 'Dica de correção'

    return false
  }

  isValid(): boolean {
    return this.uploaded
  }

}
