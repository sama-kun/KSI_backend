"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainTypeEnum = exports.ItemStatusEnum = exports.ProjectStatusEnum = exports.MainFileTypesEnum = exports.FileTypesEnum = exports.RoleEnum = exports.CartStatusEnum = void 0;
var CartStatusEnum;
(function (CartStatusEnum) {
    CartStatusEnum["FillLackReason"] = "FillLackReason";
    CartStatusEnum["Finished"] = "Finished";
    CartStatusEnum["OnProject"] = "OnProject";
    CartStatusEnum["InCart"] = "InCart";
    CartStatusEnum["FillWorkingHour"] = "FillWorkingHour";
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
    ProjectStatusEnum["planned"] = "planned";
    ProjectStatusEnum["active"] = "active";
    ProjectStatusEnum["finished"] = "finished";
})(ProjectStatusEnum = exports.ProjectStatusEnum || (exports.ProjectStatusEnum = {}));
var ItemStatusEnum;
(function (ItemStatusEnum) {
    ItemStatusEnum["warning"] = "warinig";
    ItemStatusEnum["ok"] = "ok";
})(ItemStatusEnum = exports.ItemStatusEnum || (exports.ItemStatusEnum = {}));
var MainTypeEnum;
(function (MainTypeEnum) {
    MainTypeEnum["corrective"] = "corrective";
    MainTypeEnum["preventive"] = "preventive";
})(MainTypeEnum = exports.MainTypeEnum || (exports.MainTypeEnum = {}));
//# sourceMappingURL=enums.js.map