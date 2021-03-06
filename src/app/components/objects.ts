export class Page<D> {
  content: D[];
  numberOfElements: number;
  totalElements: number;
  size: number;
  number: number;
  empty: boolean;
}

export class PageRequest {
  page = 0;
  size = 10;
}

export class PageRequestFilter<F> {
  filter = {};
  direction: string;
  field: string;
  pageNumber = 0;
  pageSize = 10;
}

export class AccessLogDto {
  id: number;
  createdAt: Date;
  ipAddress: string;
  requestLine: string;
  responseStatus: number;
  userAgent: string;
}

export class AccessLogListDto {
  id: number;
  createdAt: string;
  ipAddress: string;
  requestLine: string;
  responseStatus: number;
  userAgent: string;
}

export class AccessLogFilterDto {
  createDateRange = [];
  ipAddress: string;
  userAgent: string;
}

export class AccessLogUploadResultDto {
  message: string;
  hasError: boolean;
}

export class UploadHistoryDto {
  fileName: string;
  uploadAt: Date;
  uploadStatusMessage: string;
}

export enum UploadProcessEnum {
  PROCESSING = 'In batch process',
  SUCCESSFULY_PROCESSED = 'File upload with success',
  ERROR_ON_PROCESS = 'Error on batch process'
}
