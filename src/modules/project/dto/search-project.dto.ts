import {
  ApiPropertyOptional,
  IntersectionType,
  PartialType,
} from '@nestjs/swagger';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { ProjectEntity } from '@/database/entities/project.entity';

export class SearchProjectDto extends PartialType(
  IntersectionType(ProjectEntity, SearchQueryDto),
) {
  @ApiPropertyOptional({ type: ProjectEntity })
  sort?: Partial<ProjectEntity>;

  @ApiPropertyOptional({ type: ProjectEntity })
  filter?: Partial<ProjectEntity>;

  @ApiPropertyOptional({ type: ProjectEntity })
  search?: Partial<ProjectEntity>;
}
