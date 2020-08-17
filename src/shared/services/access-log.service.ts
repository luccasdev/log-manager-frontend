import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AccessLogDto, AccessLogUploadResultDto, Page, PageRequest, PageRequestFilter, UploadHistoryDto} from '../../app/components/objects';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessLogService {

  private backEndUrl = 'http://localhost:8080/access-log/v1';
  private $showSuccessAlert: boolean;
  private $uploadMessage: string;

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

  public uploadFile(file: any): Observable<AccessLogUploadResultDto> {
    const data: FormData = new FormData();
    data.append('file', file, file.name);

    return this.http.post<AccessLogUploadResultDto>(this.backEndUrl + '/upload', data);
  }

  public findUploadHistory(): Observable<UploadHistoryDto[]> {
    return this.http.get<UploadHistoryDto[]>(this.backEndUrl + '/upload/history');
  }


  get showSuccessAlert(): boolean {
    return this.$showSuccessAlert;
  }

  set showSuccessAlert(value: boolean) {
    this.$showSuccessAlert = value;
  }


  get uploadMessage(): string {
    return this.$uploadMessage;
  }

  set uploadMessage(value: string) {
    this.$uploadMessage = value;
  }
}
