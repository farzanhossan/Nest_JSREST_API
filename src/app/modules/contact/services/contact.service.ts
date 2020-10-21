import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, paginationOptions, successPlaceholder } from 'src/app/utils';
import { getConnection, Like, Repository } from 'typeorm';
import * as XLSX from 'xlsx';
import { BaseService } from '../../../base/base.service';
import { User } from '../../user/entities/user.entity';
import { SearchContactGroupDto } from '../dtos/search-contactGroup.dto';
import { Contact } from '../entities/contact.entity';
import { FilterContactDto } from './../dtos/filter-contact.dto';

@Injectable()
export class ContactService extends BaseService<Contact> {
  constructor(
    @InjectRepository(Contact)
    private readonly contactsService: Repository<Contact>,
  ) {
    super(contactsService);
  }

  async filterData(data: FilterContactDto, relations?: string[]): Promise<any> {
    try {
      if (data.searchTerm) {
        const responseData = await this.filter(
          {
            where: [
              { firstName: Like(`%${data.searchTerm}%`) },
              { lastName: Like(`%${data.searchTerm}%`) },
            ],
          },
          data,
          relations,
        );

        return responseData;
      } else {
        delete data.searchTerm;

        return this.findAll(data, relations);
      }
    } catch (error) {
      return error;
    }
  }
  
  async numberSearch(data: SearchContactGroupDto): Promise<any> {
    try {
      const paginationOpt = paginationOptions(data);
      console.log(data.attributes);
      const att: any = data.attributes;
      const value = data.number;
      const connection = getConnection();
      const metaData = await connection.getMetadata(User);
      const modelProperty = Object.getOwnPropertyNames(metaData.propertiesMap);
      const selecedArr: any = [];
      console.log(modelProperty);
      const isFounded = att.every(ai => modelProperty.includes(ai));
      if (isFounded) {
        att.forEach(element => {
          selecedArr.push(`user.${element}`);
        });
        // const conatcts = await connection
        //   .createQueryBuilder(Contact, 'contact')
        //   .where('contact.number = :number', { number: value })
        //   .innerJoin('contact.user', 'user')
        //   .addSelect(selecedArr)
        //   .limit(paginationOpt.take)
        //   .offset(paginationOpt.skip)
        //   .getManyAndCount();
        const contacts = await connection.getRepository(Contact).findAndCount({
          where: {
            number: value,
          },
          relations:['user']
        });
        return paginate(paginationOpt, contacts);
      } else {
        return 'Error';
      }
    } catch (error) {
      return error;
    }
  }

  async bulkInsert(file: any): Promise<any> {
    try {
      const filePath = `./uploads/files/${file.filename}`;
      const workbook = XLSX.readFile(filePath);
      const sheetNames = workbook.SheetNames;
      const sheetIndex = 1;
      const contacts = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheetNames[sheetIndex - 1]],
      );
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Contact)
        .values(contacts)
        .execute();
      return successPlaceholder('Successfully Upload');
    } catch (error) {
      return error;
    }
  }
}
