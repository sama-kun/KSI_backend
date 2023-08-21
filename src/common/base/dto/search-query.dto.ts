import { Transform } from 'class-transformer';
import { IsInt } from 'class-validator';

export class SearchQueryDto {
  pagination?: Pagination;
  sort?: any;
  search?: any;
  filter?: any;
  relations?: string[];
}

class Pagination {
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  page?: number;

  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  pageSize?: number;
}
