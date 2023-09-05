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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const BaseService_1 = require("../../common/base/BaseService");
const cart_item_entity_1 = require("../../database/entities/cart-item.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const item_service_1 = require("../item/item.service");
const enums_1 = require("../../interfaces/enums");
let CartService = class CartService extends BaseService_1.BaseService {
    constructor(repo, itemService) {
        super();
        this.repo = repo;
        this.itemService = itemService;
    }
    async createMany(data, user) {
        const cartSave = await this.create(data, user);
        const cart = await this.findById(cartSave.id, ['item']);
        console.log(cart);
        await this.itemService.transaction(cart.item.id, data.quantity, '+');
        return cartSave;
    }
    async plus(id) {
        const candidate = await super.findById(id, ['item', 'project']);
        await this.itemService.transaction(candidate.item.id, 1, '+');
        (candidate.quantity += 1), await this.repo.save(candidate);
        return await super.findById(id, ['item', 'project', 'createdBy']);
    }
    async minus(id) {
        const candidate = await super.findById(id, ['item']);
        await this.check(id, 1);
        await this.itemService.transaction(candidate.item.id, 1, '-');
        candidate.quantity -= 1;
        await this.repo.save(candidate);
        return await super.findById(id, ['item', 'project', 'createdBy']);
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
            candidate.status = enums_1.CartStatusEnum.FillLackReason;
        }
        else {
            candidate.status = enums_1.CartStatusEnum.Finished;
        }
        return candidate;
    }
    async send(user, ids, projectId) {
        const records = [];
        for (const id of ids) {
            const record = await this.update(user, id, {
                project: { id: projectId },
                status: enums_1.CartStatusEnum.FillWorkingHour,
            });
            records.push(record);
        }
        return records;
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cart_item_entity_1.CartItemEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        item_service_1.ItemService])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map