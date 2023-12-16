import { BaseService } from '@/common/base/BaseService';
import { Response } from 'express';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Injectable, Logger } from '@nestjs/common';
import ejs from 'ejs';
import * as fs from 'fs';
import { UserEntity } from '../../database/entities/user.entity';
import path from 'path';
import * as pdf1 from 'pdf-creator-node';
import { CartItemService } from '../cart-item/cart-item.service';
import * as util from 'util';
import * as pdf from 'html-pdf';
import PDFDocument from 'pdfkit';
import puppeteer from 'puppeteer';
import chromium from 'chrome-aws-lambda';
const console = new Logger('ProjectService');

@Injectable()
export class ProjectService extends BaseService<
  ProjectEntity,
  CreateProjectDto,
  UpdateProjectDto
> {
  constructor(
    @InjectRepository(ProjectEntity) protected repo: Repository<ProjectEntity>,
    protected repoCartItem: CartItemService,
  ) {
    super();
  }

  async generatePdf(): Promise<Buffer> {
    // return new Promise((resolve, reject) => {
    //   const templatePath = path.resolve(__dirname, 'template', 'test.ejs');
    //   const templateContent = fs.readFileSync(templatePath, 'utf-8');
    //   const renderedHtml = ejs.render(templateContent, { name: 'Samgar' });

    //   const pdfOptions: pdf.CreateOptions = {
    //     format: 'Letter',
    //   };

    //   pdf.create(renderedHtml, pdfOptions).toBuffer((err, buffer) => {
    //     if (err) {
    //       reject(err);
    //     } else {
    //       resolve(buffer);
    //     }
    //   });
    // });
    const browser = await puppeteer.launch({
      headless: true,
      ignoreDefaultArgs: ['--disable-extensions'],
      // executablePath: await chromium.executablePath,
      userDataDir: '.cache/puppeteer',
      // channel: await chromium.executablePath,
      //../../..
    });
    const page = await browser.newPage();

    const templatePath = path.resolve(__dirname, 'template', 'test.ejs');
    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    const renderedHtml = ejs.render(templateContent, { name: 'Samgar' });

    await page.setContent(renderedHtml);
    const pdfBuffer = await page.pdf({ format: 'Letter' });

    await browser.close();

    return pdfBuffer;
  }

  async test(res: Response, user: UserEntity, project: any) {
    // Load your EJS template
    const template = fs.readFileSync(
      path.join(__dirname, 'template', 'mdnreport.ejs'),
      'utf8',
    );
    project.pic = path.join(__dirname, 'template', 'ksi.png');

    const html = ejs.render(template, project);
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

    // Create the PDF
    const fileName = `mdnreport.pdf`;
    const pdfDocument = {
      html: html, // Pass the rendered HTML
      path: fileName, // Output file path (optional)\
      data: project,
    };

    const pdfBuffer = await pdf1.create(pdfDocument, options);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=${fileName}`);
    const fileStream = fs.createReadStream(fileName);
    // res.send(pdfBuffer);
    fileStream.pipe(res);
    // this.deleteFile(fileName);
  }

  deleteFile(fileName: string) {
    setTimeout(() => {
      util.promisify(fs.promises.unlink)(fileName);
      console.log(`File deleted: ${fileName}`);
    }, 1000);
  }

  async returnMdnReport(res: Response, user: UserEntity, project: any) {
    const template = fs.readFileSync(
      path.join(__dirname, 'template', 'returnmdnreport.ejs'),
      'utf8',
    );
    project.pic = path.join(__dirname + 'template' + 'ksi.png');

    const html = ejs.render(template, project);

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
      html: html, // Pass the rendered HTML
      path: fileName, // Output file path (optional)\
      data: project,
    };

    const pdfBuffer = await pdf1.create(pdfDocument, options);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=${fileName}`);
    const fileStream = fs.createReadStream(fileName);
    fileStream.pipe(res);
    this.deleteFile(fileName);
  }
}
