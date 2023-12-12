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
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const cart_entity_1 = require("../../database/entities/cart.entity");
const cart_item_service_1 = require("../cart-item/cart-item.service");
const enums_1 = require("../../interfaces/enums");
let CartService = class CartService extends BaseService_1.BaseService {
    constructor(repo, cartItemService) {
        super();
        this.repo = repo;
        this.cartItemService = cartItemService;
    }
    async myCreate(data, user) {
        const cart = await this.create(data, user);
        for (const id of data.cartItems) {
            await this.cartItemService.send(Number(id), Number(cart.id));
        }
        return await this.repo.save(cart);
    }
    async return(user, id) {
        const candidate = await this.findById(id, []);
        candidate.status = enums_1.CartStatusEnum.Finished;
        candidate.returnTime = new Date();
        candidate.returnBy = user;
        return candidate;
    }
    async accept(user, id) {
        const candidate = await this.findById(id, []);
        const res = await this.update(user, id, {
            status: enums_1.CartStatusEnum.accept,
        });
        return res;
    }
    async decline(user, id) {
        const candidate = await this.findById(id, [
            'cartItems.items',
            'cartItems.itemGroup',
        ]);
        candidate.cartItems.forEach(async (value) => {
            await this.cartItemService.returnItem(value.id, user);
        });
        const res = await this.update(user, id, {
            status: enums_1.CartStatusEnum.declined,
        });
        return res;
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cart_entity_1.CartEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        cart_item_service_1.CartItemService])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map