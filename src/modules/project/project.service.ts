import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseModel, Prisma, Role } from '@prisma/client';
import { PrismaService } from '@/database/prisma.service';
import { User } from '@prisma/client';
import { BaseService } from '@/common/base/BaseService';
import * as json2xls from 'json2xls';
import * as fs from 'fs-extra';

@Injectable()
export class ProjectService extends BaseService<
  BaseModel,
  Prisma.BaseModelCreateInput,
  Partial<Prisma.BaseModelCreateInput>
> {
  protected readonly model = Prisma.ModelName.BaseModel;
  constructor(prisma: PrismaService) {
    super();
    this.prisma = prisma;
  }
  // async mdnReport(response: Response) {
  //   const jsonData = [
  //     { name: 'John Doe', age: 30, email: 'john@example.com' },
  //     { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  //     // Add more data as needed
  //   ];

  //   response.setHeader(
  //     'Content-Type',
  //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  //   );
  //   response.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');

  //   // Convert JSON data to Excel format
  //   const xls = json2xls(jsonData);

  //   // Set the response headers to indicate a downloadable Excel file

  //   // Send the Excel file as a response
  //   response.send(xls);

  //   // Optional: If you want to save the Excel file locally, you can use fs-extra
  //   await fs.writeFile('data.xlsx', xls, 'binary');
  // }
}
