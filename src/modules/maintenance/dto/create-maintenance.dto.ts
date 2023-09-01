import { PartialType } from '@nestjs/swagger';

import { MaintenanceEntity } from '@/database/entities/maintenance.entity';

export class CreateMaintenanceDto extends PartialType(MaintenanceEntity) {}
