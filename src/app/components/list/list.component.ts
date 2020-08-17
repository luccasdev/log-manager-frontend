import { Component, OnInit } from '@angular/core';
import {AccessLogDto, Page, PageRequest, PageRequestFilter} from '../objects';
import {ListService} from '../../../shared/list.service';
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
  columns: TableColumn[];
  constructor(public listService: ListService) {
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

    this.listService.findAll(pageRequest).subscribe(data => {
      this.data = data.content;
      this.page = data;
    });
  }

  onSort($event: any) {
    const pageRequestFilter = new PageRequestFilter<AccessLogDto>();
    if ($event.sorts.length > 0 && $event.sorts[0].dir && $event.sorts[0].prop) {
      pageRequestFilter.direction = $event.sorts[0].dir;
      pageRequestFilter.field = $event.sorts[0].prop;
    }
    pageRequestFilter.pageNumber = this.page.number;
    pageRequestFilter.pageSize = this.page.size;
    this.listService.findAllWithFilter(pageRequestFilter).subscribe(data => {
      this.data = data.content;
      this.page = data;
    });
  }
}
