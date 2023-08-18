import { PrismaService } from '@/database/prisma.service';
import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientInitializationError } from '@prisma/client/runtime/library';
const console = new Logger('BaseService');
export abstract class BaseService<T, InputDto, OutputDto> {
  protected prisma: PrismaService;

  // constructor() {
  //   this.prisma = new PrismaClient().user;
  // }
  protected abstract readonly model: Prisma.ModelName;

  async create(data: InputDto): Promise<OutputDto> {
    try {
      return this.prisma[this.model].create({ data });
    } catch (e) {
      throw new HttpException(
        'Error creating record',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, data: InputDto): Promise<OutputDto> {
    try {
      const record = this.prisma[this.model].findById(id);
      console.log(record);
      if (!record)
        throw new PrismaClientInitializationError('Error updating record', '');
      const updated = this.prisma[this.model].update({ where: { id }, data });
      return updated;
    } catch (e) {
      throw new HttpException('Record not found1', HttpStatus.NOT_FOUND);
      // throw new HttpException(
      //   'Error updating record',
      //   HttpStatus.INTERNAL_SERVER_ERROR,
      // );
    }
  }

  async findOne(id: number, relations: string[]): Promise<OutputDto> {
    try {
      let convertedObject = null;
      if (relations) {
        convertedObject = relations.reduce((acc, relation) => {
          acc[relation] = true;
          return acc;
        }, {});
      }
      const record = this.prisma[this.model].findUnique({
        where: {
          id,
        },
        include: convertedObject,
      });
      if (!record)
        throw new HttpException('Record not found', HttpStatus.NOT_FOUND);
      delete record.password;
      return record;
    } catch (e) {
      throw new PrismaClientInitializationError('Error updating record', '');
    }
  }
  async findAll(
    page: number,
    pageSize: number,
    sort: any,
    relations: string[],
    filter: any,
    search: any,
  ): Promise<any> {
    try {
      let convertedObject = null;
      let searchObj = null;
      if (relations) {
        convertedObject = relations.reduce((acc, relation) => {
          acc[relation] = true;
          return acc;
        }, {});
      }
      if (search) {
        const searchKey = Object.keys(search)[0];
        searchObj = {
          [searchKey]: {
            contains: search[searchKey],
            mode: 'insensitive',
          },
        };
      }
      const records = await this.prisma[this.model].findMany({
        orderBy: sort,
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: convertedObject,
        where: {
          ...searchObj,
          ...filter,
        },
      });

      const total = records.length;
      const meta = this.createMeta(page, pageSize, total);

      return {
        records,
        meta,
      };
    } catch (error) {
      console.error(error);
      throw new PrismaClientInitializationError(error, 'IDK');
    }
  }

  private createMeta(page: number, pageSize: number, total: number) {
    const meta = {
      page,
      pageSize,
      pageCount: Math.ceil(total / pageSize),
      total,
    };
    return meta;
  }

  async findById(id: number): Promise<OutputDto> {
    const user = await this.prisma[this.model].findUnique({
      where: id,
    });
    return user;
  }
}
