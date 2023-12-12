"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const BaseService_1 = require("../../common/base/BaseService");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const project_entity_1 = require("../../database/entities/project.entity");
const common_1 = require("@nestjs/common");
const ejs_1 = __importDefault(require("ejs"));
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const pdf1 = __importStar(require("pdf-creator-node"));
const cart_item_service_1 = require("../cart-item/cart-item.service");
const util = __importStar(require("util"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const console = new common_1.Logger('ProjectService');
let ProjectService = class ProjectService extends BaseService_1.BaseService {
    constructor(repo, repoCartItem) {
        super();
        this.repo = repo;
        this.repoCartItem = repoCartItem;
    }
    async generatePdf() {
        const browser = await puppeteer_1.default.launch({ headless: true });
        const page = await browser.newPage();
        const templatePath = path_1.default.resolve(__dirname, 'template', 'test.ejs');
        const templateContent = fs.readFileSync(templatePath, 'utf-8');
        const renderedHtml = ejs_1.default.render(templateContent, { name: 'Samgar' });
        await page.setContent(renderedHtml);
        const pdfBuffer = await page.pdf({ format: 'Letter' });
        await browser.close();
        return pdfBuffer;
    }
    async test(res, user, project) {
        const template = fs.readFileSync(path_1.default.join(__dirname, 'template', 'mdnreport.ejs'), 'utf8');
        project.pic = path_1.default.join(__dirname, 'template', 'ksi.png');
        const html = ejs_1.default.render(template, project);
        const options = {
            format: 'A4',
            orientation: 'portrait',
            border: '10mm',
            header: {
                height: '10mm',
            },
            footer: {
                height: '10mm',
            },
        };
        const fileName = `mdnreport.pdf`;
        const pdfDocument = {
            html: html,
            path: fileName,
            data: project,
        };
        const pdfBuffer = await pdf1.create(pdfDocument, options);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename=${fileName}`);
        const fileStream = fs.createReadStream(fileName);
        fileStream.pipe(res);
    }
    deleteFile(fileName) {
        setTimeout(() => {
            util.promisify(fs.promises.unlink)(fileName);
            console.log(`File deleted: ${fileName}`);
        }, 1000);
    }
    async returnMdnReport(res, user, project) {
        const template = fs.readFileSync(path_1.default.join(__dirname, 'template', 'returnmdnreport.ejs'), 'utf8');
        project.pic = path_1.default.join(__dirname + 'template' + 'ksi.png');
        const html = ejs_1.default.render(template, project);
        const options = {
            format: 'A4',
            orientation: 'portrait',
            border: '10mm',
            header: {
                height: '10mm',
            },
            footer: {
                height: '10mm',
            },
        };
        const fileName = `returnmdnreport.pdf`;
        const pdfDocument = {
            html: html,
            path: fileName,
            data: project,
        };
        const pdfBuffer = await pdf1.create(pdfDocument, options);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename=${fileName}`);
        const fileStream = fs.createReadStream(fileName);
        fileStream.pipe(res);
        this.deleteFile(fileName);
    }
};
ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(project_entity_1.ProjectEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        cart_item_service_1.CartItemService])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map