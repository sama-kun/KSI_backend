"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemGroupModule = void 0;
const common_1 = require("@nestjs/common");
const item_group_service_1 = require("./item-group.service");
const item_group_controller_1 = require("./item-group.controller");
const typeorm_1 = require("@nestjs/typeorm");
const item_group_entity_1 = require("../../database/entities/item-group.entity");
const item_module_1 = require("../item/item.module");
const jwt_1 = require("@nestjs/jwt");
let ItemGroupModule = class ItemGroupModule {
};
ItemGroupModule = __decorate([
    (0, common_1.Module)({
        controllers: [item_group_controller_1.ItemController],
        providers: [item_group_service_1.ItemGroupService],
        imports: [typeorm_1.TypeOrmModule.forFeature([item_group_entity_1.ItemGroupEntity]), item_module_1.ItemModule, jwt_1.JwtModule],
        exports: [item_group_service_1.ItemGroupService],
    })
], ItemGroupModule);
exports.ItemGroupModule = ItemGroupModule;
//# sourceMappingURL=item-group.module.js.map