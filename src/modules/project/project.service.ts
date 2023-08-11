import { BadRequestException, Injectable } from '@nestjs/common';
import { Project, Prisma, Role } from '@prisma/client';
import { PrismaService } from '@/database/prisma.service';
import { BaseService } from '@/common/base/BaseService';
import * as json2xls from 'json2xls';
import * as fs from 'fs-extra';
import { Response } from 'express';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from '@/database/entities/project.entity';

@Injectable()
export class ProjectService extends BaseService<
  ProjectEntity,
  Prisma.ProjectCreateInput,
  Partial<Prisma.ProjectCreateInput>
> {
  constructor(@InjectRepository(ProjectEntity) protected repo: Repository<ProjectEntity>) {
    super();
  }
  // test(){
  //   return super().
  // }

  async mdnReport(response: Response) {
    const jsonData = [
      { name: 'John Doe', age: 30, email: 'john@example.com' },
      { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      // Add more data as needed
    ];

    response.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    response.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');

    // Convert JSON data to Excel format
    const xls = json2xls(jsonData);

    // Set the response headers to indicate a downloadable Excel file

    // Send the Excel file as a response
    response.send(xls);

    // Optional: If you want to save the Excel file locally, you can use fs-extra
    await fs.writeFile('data.xlsx', xls, 'binary');
  }
}
