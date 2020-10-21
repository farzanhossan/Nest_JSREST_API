import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../base/base.service';
import { ContactGroup } from '../entities/contactGroup.entity';


@Injectable()
export class ContactGroupService extends BaseService<ContactGroup> {
  constructor(
    @InjectRepository(ContactGroup)
    private readonly contactGroupsService: Repository<ContactGroup>,
  ) {
    super(contactGroupsService);
  }
}
