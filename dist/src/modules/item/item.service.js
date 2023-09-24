"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const BaseService_1 = require("../../common/base/BaseService");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const item_entity_1 = require("../../database/entities/item.entity");
const enums_1 = require("../../interfaces/enums");
const console = new common_1.Logger('ItemService');
let ItemService = class ItemService extends BaseService_1.BaseService {
    constructor(repo) {
        super();
        this.repo = repo;
    }
    async updateWorkedHours(id, workedHour) {
        const candidate = await this.findById(id, []);
        candidate.workedHours = workedHour;
        return this.repo.save(candidate);
    }
    async updateWorkingHours(id, workingHour) {
        const candidate = await this.findById(id, []);
        candidate.workingHours = workingHour;
        candidate.status = enums_1.ItemStatusEnum.inProject;
        return this.repo.save(candidate);
    }
    async addCartItem(itemId, cartId) {
        const item = await this.findById(itemId, ['cartItems']);
        item.cartItems = [...item.cartItems, { id: cartId }];
        item.status = enums_1.ItemStatusEnum.inCart;
        console.log(item);
        return this.repo.save(item);
    }
    async removeCartItem(itemId, cartId) {
        const candidate = await this.findById(itemId, ['cartItems']);
        candidate.cartItems = [
            ...candidate.cartItems.filter((item) => item.id != cartId),
        ];
        candidate.status = enums_1.ItemStatusEnum.ok;
        return await this.repo.save(candidate);
    }
};
ItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(item_entity_1.ItemEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ItemService);
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map