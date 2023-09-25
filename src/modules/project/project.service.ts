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
  ) {
    super();
  }
  // test(){
  //   return super().
  // }

  async mdnReport(res: Response, user: UserEntity) {
    const name = 'mdnreport_' + user.email + '.pdf';
    const fileName = path.join(__dirname, './template', name);
    ejs.renderFile(
      path.join(__dirname, './template/', 'mdnreport.ejs'),
      {},
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
              res.setHeader('Content-Disposition', 'inline; filename=' + name);

              // Create a read stream to send the file
              const fileStream = fs.createReadStream(fileName);
              fileStream.pipe(res);
            }
          });
        }
      },
    );
    setTimeout(() => {
      util.promisify(fs.promises.unlink)(fileName);
      console.log(`File deleted: ${fileName}`);
    }, 1000);
  }
}
