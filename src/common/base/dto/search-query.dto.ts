import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class SearchQueryDto {
  pagination?: Pagination;
  sort?: any;
  search?: any;
  filter?: any;
  relations?: string[];
}

class Pagination {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  page?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  pageSize?: number;
}
