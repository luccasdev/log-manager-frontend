import { Component, OnInit } from '@angular/core';
import {AccessLogService} from '../../../shared/services/access-log.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(public accessLogService: AccessLogService) { }
  fileEvent: any;

  ngOnInit(): void {
  }

  handleFileInput($event: any) {
    this.fileEvent = $event;
  }

  uploadFile() {
    this.accessLogService.uploadFile(this.fileEvent.target.files[0]).subscribe(() => {
      return;
    }
  );
  }
}
