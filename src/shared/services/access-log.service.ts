import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AccessLogDto, Page, PageRequest, PageRequestFilter} from '../../app/components/objects';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessLogService {

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

  public save(accessLogDto: AccessLogDto): Observable<void> {
    return this.http.post<void>(this.backEndUrl + '/', accessLogDto);
  }

  public uploadFile(file: any): Observable<void> {
    const data: FormData = new FormData();
    data.append('file_upload', file, file.name);
    const params = new HttpParams()
      .set('file-name', file.name);

    return this.http.post<void>(this.backEndUrl + '/upload', data, { params });
  }
}
