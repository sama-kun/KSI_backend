import { XxxService } from './xxx.service';
import { BaseController } from '@/common/base/BaseController';
import { XxxEntity } from '@/database/entities/xxx.entity';
import { SearchXxxDto } from '@/modules/xxx/dto/search-xxx.dto';
import { CreateXxxDto } from './dto/create-xxx.dto';
import { UpdateXxxDto } from './dto/update-xxx.dto';
export declare class XxxController extends BaseController<XxxEntity, CreateXxxDto, UpdateXxxDto, SearchXxxDto, XxxService> {
    constructor(dataService: XxxService);
}
