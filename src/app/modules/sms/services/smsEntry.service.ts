import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../base/base.service';
import { SmsEntry } from '../entities/smsEntry.entity';

@Injectable()
export class SmsEntryService extends BaseService<SmsEntry> {
  constructor(
    @InjectRepository(SmsEntry) private readonly smsEntrysService: Repository<SmsEntry>,
  ) {
    super(smsEntrysService);
  }
}
