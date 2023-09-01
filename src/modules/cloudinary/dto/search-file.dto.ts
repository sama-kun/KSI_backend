import { IntersectionType, PartialType } from '@nestjs/swagger';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { FileEntity } from '@/database/entities/file.entity';

export class SearchFileDto extends PartialType(
  IntersectionType(FileEntity, SearchQueryDto),
) {
  sort?: Partial<FileEntity>;
}
