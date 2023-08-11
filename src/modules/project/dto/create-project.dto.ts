import { ProjectEntity } from "@/database/entities/project.entity";
import { PartialType } from "@nestjs/swagger";

export class CreateProjectDto extends PartialType(ProjectEntity) {

}