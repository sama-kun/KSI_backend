"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainFileTypesEnum = exports.FileTypesEnum = exports.RoleEnum = exports.CartStatusEnum = void 0;
var CartStatusEnum;
(function (CartStatusEnum) {
    CartStatusEnum["Warning"] = "Warning";
    CartStatusEnum["Complate"] = "Complate";
    CartStatusEnum["OnProject"] = "OnProject";
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
//# sourceMappingURL=enums.js.map