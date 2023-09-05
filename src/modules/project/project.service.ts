import { BaseService } from '@/common/base/BaseService';
import { Response } from 'express';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Injectable, Logger } from '@nestjs/common';
import PDFDocument from 'pdfkit';
import * as ejs from 'ejs';
import * as path from 'path';
import * as fs from 'fs';
// import * as htmlPdf from 'html-pdf';
import { UserEntity } from '../../database/entities/user.entity';
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

  async mdnReport(user: UserEntity, res: Response, id: number) {
    const project = await this.findById(id, [
      'carts',
      'carts.item',
      'carts.createdBy',
    ]);
    const doc = new PDFDocument();
    const fileName = 'KSI_Project_MDNreport.pdf';
    console.debug(project.carts);

    // Данные для шаблона

    // Путь к шаблону EJS
    const templatePath = path.join(__dirname, 'template', 'mdnreport.ejs');
    // Рендеринг шаблона EJS в HTML
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = ejs.render(template, { project });

    // Установка заголовков для PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);

    // Поток для записи PDF
    doc.pipe(res);

    // Помещаем HTML в PDF
    doc.text(html);

    // Заканчиваем запись PDF и отправляем клиенту
    doc.end();
  }
}
