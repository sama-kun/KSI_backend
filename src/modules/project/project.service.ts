import { BaseService } from '@/common/base/BaseService';
import { Response } from 'express';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Injectable } from '@nestjs/common';
// import PDFDocument from 'pdfkit';
// import * as ejs from 'ejs';
// import * as path from 'path';
// import * as fs from 'fs';
// import * as htmlPdf from 'html-pdf';

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

  // async mdnReport(res: Response) {
  //   const doc = new PDFDocument();
  //   const fileName = 'generated-pdf.pdf';

  //   // Данные для шаблона
  //   const data = { name: 'John Doe', email: 'john@example.com' };

  //   // Путь к шаблону EJS
  //   const templatePath = path.join(__dirname, 'template', 'mdnreport.ejs');

  //   // Рендеринг шаблона EJS в HTML
  //   const template = fs.readFileSync(templatePath, 'utf-8');
  //   const html = ejs.render(template, { data });

  //   // Установка заголовков для PDF
  //   res.setHeader('Content-Type', 'application/pdf');
  //   res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);

  //   // Поток для записи PDF
  //   doc.pipe(res);

  //   // Помещаем HTML в PDF
  //   doc.text(html);

  //   // Заканчиваем запись PDF и отправляем клиенту
  //   doc.end();
  // }
}
