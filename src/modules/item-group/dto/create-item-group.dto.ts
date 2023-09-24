import { ItemGroupEntity } from '@/database/entities/item-group.entity';
import { PartialType } from '@nestjs/swagger';

export class CreateItemGroupDto extends PartialType(ItemGroupEntity) {}
