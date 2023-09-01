import { CreateMaintenanceDto } from './create-maintenance.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateMaintenanceDto extends PartialType(CreateMaintenanceDto) {}
