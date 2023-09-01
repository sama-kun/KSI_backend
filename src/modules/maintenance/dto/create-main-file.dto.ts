import { PartialType } from '@nestjs/swagger';

import { MainFileEntity } from '@/database/entities/main-file.entity';

export class CreateMainFileDto extends PartialType(MainFileEntity) {}
