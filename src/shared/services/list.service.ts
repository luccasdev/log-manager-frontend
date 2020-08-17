import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AccessLogDto, Page, PageRequest, PageRequestFilter} from '../../app/components/objects';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private backEndUrl = 'http://localhost:8080/access-log/v1';

  constructor(private http: HttpClient) { }

  public findAll(pageRequest: PageRequest): Observable<Page<AccessLogDto>> {
    const params = new HttpParams()
      .set('size', String(pageRequest.size))
      .set('page', String(pageRequest.page));

    return this.http.get<Page<AccessLogDto>>(this.backEndUrl + '/', { params });
  }

  public findAllWithFilter(pageRequestFilter: PageRequestFilter<AccessLogDto>): Observable<Page<AccessLogDto>> {
    return this.http.post<Page<AccessLogDto>>(this.backEndUrl + '/filter', pageRequestFilter);
  }
}
