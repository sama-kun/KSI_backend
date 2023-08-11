import { ItemEntity } from "@/database/entities/item.entity";
import { PartialType } from "@nestjs/swagger";

export class CreateItemDto extends PartialType(ItemEntity) {

}