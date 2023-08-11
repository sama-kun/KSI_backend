import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientInitializationError } from '@prisma/client/runtime/library';
import { BaseModel } from './BaseModel';
import { ObjectLiteral, Repository, TypeORMError } from 'typeorm';
import { UserEntity } from '@/database/entities/user.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
const console = new Logger('BaseService');
export abstract class BaseService<
  Entity extends BaseModel & ObjectLiteral,
  InputDto,
  OutputDto,
> {
  protected repo: Repository<Entity>;

  async create(data: InputDto, user: UserEntity, relations: string[]) {
    try {
      const record = await this.repo.insert({
        ...data,
        createdBy: { id: user.id },
      } as QueryDeepPartialEntity<Entity>);
      return record;
    } catch (e) {
      throw new TypeORMError(e);
    }
  }

  async findOne(option: any): Promise<any> {
    try {
      const record = this.repo.findOneBy(option);
      if (!record)
        throw new HttpException('Record not found', HttpStatus.NOT_FOUND);
      return record;
    } catch (e) {
      throw new PrismaClientInitializationError('Error updating record', '');
    }
  }

  // async update(id: number, data: UpdateDto): Promise<CreateDto> {
  //   try {
  //     const record = this.prisma[this.model].findUnique(id);
  //     if (!record)
  //       throw new PrismaClientInitializationError('Error updating record', '');
  //     const updated = this.prisma[this.model].update({ where: { id }, data });
  //     return updated;
  //   } catch (e) {
  //     console.debug(e);
  //     throw new HttpException('Record not found', HttpStatus.NOT_FOUND);
  //     // throw new HttpException(
  //     //   'Error updating record',
  //     //   HttpStatus.INTERNAL_SERVER_ERROR,
  //     // );
  //   }
  // }

  // async findAll(
  //   page: number,
  //   pageSize: number,
  //   sort: any,
  //   relations: string[],
  //   filter: any,
  //   search: any,
  // ): Promise<any> {
  //   try {
  //     let convertedObject = null;
  //     let searchObj = null;
  //     if (relations) {
  //       convertedObject = relations.reduce((acc, relation) => {
  //         acc[relation] = true;
  //         return acc;
  //       }, {});
  //     }
  //     if (search) {
  //       const searchKey = Object.keys(search)[0];
  //       searchObj = {
  //         [searchKey]: {
  //           contains: search[searchKey],
  //           mode: 'insensitive',
  //         },
  //       };
  //     }
  //     const records = await this.prisma[this.model].findMany({
  //       orderBy: sort,
  //       skip: (page - 1) * pageSize,
  //       take: pageSize,
  //       include: convertedObject,
  //       where: {
  //         ...searchObj,
  //         ...filter,
  //       },
  //     });

  //     const total = records.length;
  //     const meta = this.createMeta(page, pageSize, total);

  //     return {
  //       records,
  //       meta,
  //     };
  //   } catch (error) {
  //     console.error(error);
  //     throw new PrismaClientInitializationError(error, 'IDK');
  //   }
  // }

  // private createMeta(page: number, pageSize: number, total: number) {
  //   const meta = {
  //     page,
  //     pageSize,
  //     pageCount: Math.ceil(total / pageSize),
  //     total,
  //   };
  //   return meta;
  // }

  // async findById(id: number): Promise<Prisma.ItemCreateInput> {
  //   const candidate = this.prisma[this.model].findUnique({
  //     where: { id },
  //   });

  //   if (!candidate) {
  //     throw new HttpException('Record not found', HttpStatus.NOT_FOUND);
  //   }

  //   return candidate;
  // }
}
