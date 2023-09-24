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
exports.ItemGroupService = void 0;
const common_1 = require("@nestjs/common");
const BaseService_1 = require("../../common/base/BaseService");
const item_group_entity_1 = require("../../database/entities/item-group.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const item_service_1 = require("../item/item.service");
const enums_1 = require("../../interfaces/enums");
let ItemGroupService = class ItemGroupService extends BaseService_1.BaseService {
    constructor(repo, repoItem) {
        super();
        this.repo = repo;
        this.repoItem = repoItem;
    }
    async transaction(id, cart, quantity, operation) {
        const candidate = await this.findById(id, ['items']);
        if (operation === '+') {
            await this.check(id, quantity);
            candidate.quantity -= quantity;
            candidate.projectQuantity += quantity;
            console.log(operation);
            await this.addRandomItemToCatItem(id, cart.id);
        }
        else {
            if (candidate.projectQuantity === 0)
                throw new common_1.BadRequestException("Don't enough quantity of itemGroup id: " + id);
            candidate.quantity += quantity;
            candidate.projectQuantity -= quantity;
            const items = cart.items;
            await this.repoItem.removeCartItem(items[items.length - 1].id, candidate.id);
        }
        return await this.repo.save(candidate);
    }
    async check(id, transcript) {
        const item = await this.findById(id, []);
        if (item.quantity < transcript)
            throw new common_1.BadRequestException("Don't enough quantity of itemGroup id: " + id);
    }
    async addRandomItemToCatItem(id, cartId) {
        const candidate = await this.findById(id, ['items']);
        const items = candidate.items.filter((item) => item.status === enums_1.ItemStatusEnum.ok);
        if (items.length === 0)
            throw new common_1.BadRequestException('All items are booking');
        const itemId = this.randomGenerater(items.map((item) => item.id));
        return this.repoItem.addCartItem(itemId, cartId);
    }
    randomGenerater(ids) {
        return ids[Math.floor(Math.random() * ids.length)];
    }
};
ItemGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(item_group_entity_1.ItemGroupEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        item_service_1.ItemService])
], ItemGroupService);
exports.ItemGroupService = ItemGroupService;
//# sourceMappingURL=item-group.service.js.map