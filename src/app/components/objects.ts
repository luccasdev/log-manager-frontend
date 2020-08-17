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
  size = 10;;
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
