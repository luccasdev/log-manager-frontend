import { Component, OnInit } from '@angular/core';
import {AccessLogDto} from '../objects';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccessLogService} from '../../../shared/services/access-log.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  accessLogFormGroup: FormGroup;
  submitted = false;
  showSuccessAlert = false;

  constructor(public accessLogService: AccessLogService) {
    this.accessLogFormGroup = new FormGroup({
      ipAddress: new FormControl('', [
        Validators.required,
      ]),
      createdAt: new FormControl('', [
        Validators.required
      ]),
      requestLine: new FormControl('', [
        Validators.required
      ]),
      responseStatus: new FormControl('', [
        Validators.required
      ]),
      userAgent: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  save() {
    this.submitted = true;
    if (this.accessLogFormGroup.valid) {
      this.accessLogService.save(this.accessLogFormGroup.getRawValue()).subscribe(() => {
        this.showSuccessAlert = true;
      });
    }
  }
}
