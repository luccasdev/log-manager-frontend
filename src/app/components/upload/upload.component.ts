import { Component, OnInit } from '@angular/core';
import {AccessLogService} from '../../../shared/services/access-log.service';
import {AccessLogUploadResultDto, UploadHistoryDto} from '../objects';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {


  accessLogUploadResultDto = new AccessLogUploadResultDto();
  uploadHistoryDto: UploadHistoryDto[] = new Array<UploadHistoryDto>();
  fileEvent: any;
  fileUploaded: boolean;

  constructor(public accessLogService: AccessLogService, private router: Router) {
    accessLogService.findUploadHistory().subscribe(result => {
      this.uploadHistoryDto = result;
    });
  }

  ngOnInit(): void {
  }

  handleFileInput($event: any) {
    this.fileEvent = $event;
  }

  uploadFile() {
    this.accessLogService.uploadFile(this.fileEvent.target.files[0]).subscribe(result => {
      this.accessLogUploadResultDto = result;
      this.fileUploaded = true;
      this.accessLogService.showSuccessAlert = !result.hasError;
      this.accessLogService.uploadMessage = result.message;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/upload']);
      });
    }
  );
  }
}
