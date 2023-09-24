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
exports.CartItemService = void 0;
const common_1 = require("@nestjs/common");
const BaseService_1 = require("../../common/base/BaseService");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cart_item_entity_1 = require("../../database/entities/cart-item.entity");
const item_group_service_1 = require("../item-group/item-group.service");
const enums_1 = require("../../interfaces/enums");
const item_service_1 = require("../item/item.service");
let CartItemService = class CartItemService extends BaseService_1.BaseService {
    constructor(repo, itemGroupService, itemService) {
        super();
        this.repo = repo;
        this.itemGroupService = itemGroupService;
        this.itemService = itemService;
    }
    async createMany(data, user) {
        const cartItemSave = await this.create(data, user);
        const cartItem = await this.findById(cartItemSave.id, ['itemGroup']);
        await this.itemGroupService.transaction(cartItem.itemGroup.id, cartItem, data.quantity, '+');
        return await this.findById(cartItem.id, ['itemGroup', 'items']);
    }
    async plus(id) {
        const candidate = await this.findById(id, ['itemGroup']);
        await this.itemGroupService.transaction(candidate.itemGroup.id, candidate, 1, '+');
        candidate.quantity += 1;
        await this.repo.save(candidate);
        return await this.findById(id, ['items', 'createdBy', 'itemGroup']);
    }
    async minus(id) {
        const candidate = await this.findById(id, ['items', 'itemGroup']);
        console.log(candidate.items);
        await this.itemGroupService.transaction(candidate.itemGroup.id, candidate, 1, '-');
        candidate.quantity -= 1;
        const last_id = candidate.items[candidate.items.length - 1].id;
        candidate.items = [...candidate.items.filter((item) => item.id != last_id)];
        await this.itemService.update(null, last_id, { status: enums_1.ItemStatusEnum.ok });
        await this.repo.save(candidate);
        return await this.findById(id, ['items', 'createdBy', 'itemGroup']);
    }
    async check(id, transcript) {
        const cart = await this.findById(id, []);
        if (cart.quantity < transcript)
            throw new common_1.BadRequestException("Don't enough quantity of item id: " + id);
    }
    async return(id, initialQuantity) {
        const candidate = await this.findById(id, []);
        candidate.isHistory = true;
        candidate.initialQuantity = initialQuantity;
        if (candidate.quantity != initialQuantity) {
            candidate.status = enums_1.CartItemStatusEnum.lackOfQuantity;
        }
        else {
            candidate.status = enums_1.CartItemStatusEnum.finished;
        }
        return candidate;
    }
};
CartItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_item_entity_1.CartItemEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        item_group_service_1.ItemGroupService,
        item_service_1.ItemService])
], CartItemService);
exports.CartItemService = CartItemService;
//# sourceMappingURL=cart-item.service.js.map