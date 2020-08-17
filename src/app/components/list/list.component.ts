import { Component, OnInit } from '@angular/core';
import {AccessLogDto, AccessLogFilterDto, Page, PageRequest, PageRequestFilter} from '../objects';
import {AccessLogService} from '../../../shared/services/access-log.service';
import {ColumnMode, TableColumn} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  ColumnMode = ColumnMode;
  page = new Page();
  data: AccessLogDto[];
  filter: AccessLogFilterDto = new AccessLogFilterDto();
  columns: TableColumn[];
  constructor(public accessLogService: AccessLogService) {
    this.columns = [
      { name: 'Date and Time', prop: 'createdAt' },
      { name: 'IP Address', prop: 'ipAddress' },
      { name: 'Request Line', prop: 'requestLine' },
      { name: 'Response Status', prop: 'responseStatus' },
      { name: 'User Agent', prop: 'userAgent' }
    ];
  }

  ngOnInit(): void {
    this.loadData({ offset: 0 });
  }

  loadData($event: any) {
    const pageRequest = new PageRequest();

    if ($event.pageSize && $event.offset) {
      pageRequest.size = $event.pageSize;
      pageRequest.page = $event.offset;
    }

    this.accessLogService.findAll(pageRequest).subscribe(data => {
      this.data = data.content;
      this.page = data;
    });
  }



  onSort($event: any) {
    const pageRequestFilter = new PageRequestFilter<AccessLogFilterDto>();
    if ($event.sorts.length > 0 && $event.sorts[0].dir && $event.sorts[0].prop) {
      pageRequestFilter.direction = $event.sorts[0].dir;
      pageRequestFilter.field = $event.sorts[0].prop;
    }
    pageRequestFilter.pageNumber = this.page.number;
    pageRequestFilter.pageSize = this.page.size;
    this.accessLogService.findAllWithFilter(pageRequestFilter).subscribe(data => {
      this.data = data.content;
      this.page = data;
    });
  }

  onClickFilter() {
    const pageRequestFilter = new PageRequestFilter<AccessLogFilterDto>();
    pageRequestFilter.filter = this.filter;
    this.accessLogService.findAllWithFilter(pageRequestFilter).subscribe(data => {
      this.data = data.content;
      this.page = data;
    });
  }
}
