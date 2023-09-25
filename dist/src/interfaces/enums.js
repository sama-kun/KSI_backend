"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainTypeEnum = exports.CartItemStatusEnum = exports.ItemStatusEnum = exports.ProjectStatusEnum = exports.MainFileTypesEnum = exports.FileTypesEnum = exports.RoleEnum = exports.CartStatusEnum = void 0;
var CartStatusEnum;
(function (CartStatusEnum) {
    CartStatusEnum["Finished"] = "Finished";
    CartStatusEnum["OnProject"] = "OnProject";
    CartStatusEnum["InCart"] = "InCart";
    CartStatusEnum["LackOfQuantity"] = "LackOfQuantity";
})(CartStatusEnum = exports.CartStatusEnum || (exports.CartStatusEnum = {}));
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "user";
    RoleEnum["ADMIN"] = "admin";
    RoleEnum["ROOT"] = "root";
})(RoleEnum = exports.RoleEnum || (exports.RoleEnum = {}));
var FileTypesEnum;
(function (FileTypesEnum) {
    FileTypesEnum["PDF"] = "pdf";
    FileTypesEnum["IMAGE"] = "image";
})(FileTypesEnum = exports.FileTypesEnum || (exports.FileTypesEnum = {}));
var MainFileTypesEnum;
(function (MainFileTypesEnum) {
    MainFileTypesEnum["fault"] = "fault";
    MainFileTypesEnum["testing"] = "testing";
    MainFileTypesEnum["main"] = "main";
    MainFileTypesEnum["problem"] = "problem";
})(MainFileTypesEnum = exports.MainFileTypesEnum || (exports.MainFileTypesEnum = {}));
var ProjectStatusEnum;
(function (ProjectStatusEnum) {
    ProjectStatusEnum["detailing"] = "detailing";
    ProjectStatusEnum["planned"] = "planned";
    ProjectStatusEnum["active"] = "active";
    ProjectStatusEnum["finished"] = "finished";
})(ProjectStatusEnum = exports.ProjectStatusEnum || (exports.ProjectStatusEnum = {}));
var ItemStatusEnum;
(function (ItemStatusEnum) {
    ItemStatusEnum["warning"] = "warinig";
    ItemStatusEnum["ok"] = "ok";
    ItemStatusEnum["fault"] = "fault";
    ItemStatusEnum["inProject"] = "inProject";
    ItemStatusEnum["inCart"] = "inCart";
})(ItemStatusEnum = exports.ItemStatusEnum || (exports.ItemStatusEnum = {}));
var CartItemStatusEnum;
(function (CartItemStatusEnum) {
    CartItemStatusEnum["detailing"] = "detailing";
    CartItemStatusEnum["fillWorkingHours"] = "fillWorkingHours";
    CartItemStatusEnum["inProject"] = "inProject";
    CartItemStatusEnum["fillWorkedHours"] = "fillWorkedHours";
    CartItemStatusEnum["lackOfQuantity"] = "lackOfQuantity";
    CartItemStatusEnum["finished"] = "finished";
})(CartItemStatusEnum = exports.CartItemStatusEnum || (exports.CartItemStatusEnum = {}));
var MainTypeEnum;
(function (MainTypeEnum) {
    MainTypeEnum["corrective"] = "corrective";
    MainTypeEnum["preventive"] = "preventive";
})(MainTypeEnum = exports.MainTypeEnum || (exports.MainTypeEnum = {}));
//# sourceMappingURL=enums.js.map