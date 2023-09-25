import { BaseService } from '@/common/base/BaseService';
import { Response } from 'express';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Injectable, Logger } from '@nestjs/common';
import PDFDocument from 'pdfkit';
import ejs from 'ejs';
import * as fs from 'fs';
import * as pdf from 'html-pdf';
import { UserEntity } from '../../database/entities/user.entity';
import path from 'path';
import * as pdf1 from 'pdf-creator-node';
import { CartItemService } from '../cart-item/cart-item.service';
import { projects } from '../../database/seeds/test.seed';
import * as util from 'util';
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
  // test(){
  //   return super().
  // }

  async test(res: Response, user: UserEntity, project: any) {
    // Load your EJS template
    const template = fs.readFileSync(
      path.join(__dirname, 'template', 'mdnreport.ejs'),
      'utf8',
    );
    console.debug(project.cart.createdBy);
    project.path = path.join(__dirname, './template', 'ksi.png');

    // Render the template with data
    const html = ejs.render(template, project);

    // Define PDF options
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
    const fileName = `mdnreport_${project.cart.createdBy.name}.pdf`;
    const pdfDocument = {
      html: html, // Pass the rendered HTML
      path: fileName, // Output file path (optional)\
      data: project,
    };

    const pdfBuffer = await pdf1.create(pdfDocument, options);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=${fileName}`);
    res.sendFile(path.join(__dirname, 'template', fileName));
    const fileStream = fs.createReadStream(fileName);
    fileStream.pipe(res);
    setTimeout(() => {
      util.promisify(fs.promises.unlink)(fileName);
      console.log(`File deleted: ${fileName}`);
    }, 1000);
  }

  async mdnReport(res: Response, user: UserEntity, id: number) {
    // const name = 'mdnreport_' + user.email + '.pdf';
    try {
      const project = await this.findById(id, [
        'cart',
        'cart.cartItems.items',
        'cart.cartItems.itemGroup',
        'cart.createdBy',
      ]);
      const name = 'mdnreport.pdf';
      console.log(project);
      const fileName = path.join(__dirname, './template', name);
      ejs.renderFile(
        path.join(__dirname, './template/', 'mdnreport.ejs'),
        { data: project },
        (err, data) => {
          if (err) {
            res.send(err);
          } else {
            const options = {
              height: '11.25in',
              width: '8.5in',
              header: {
                height: '20mm',
              },
              footer: {
                height: '20mm',
              },
            };
            pdf.create(data, options).toFile(fileName, function (err, data) {
              if (err) {
                res.send(err);
              } else {
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader(
                  'Content-Disposition',
                  'inline; filename=' + name,
                );

                // Create a read stream to send the file
                const fileStream = fs.createReadStream(fileName);
                fileStream.pipe(res);
              }
            });
          }
        },
      );
      // setTimeout(() => {
      //   util.promisify(fs.promises.unlink)(fileName);
      //   console.log(`File deleted: ${fileName}`);
      // }, 1000);
    } catch (error) {
      console.log(error);
    }
  }
}
