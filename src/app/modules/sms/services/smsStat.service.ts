import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../base/base.service';
import { SmsStat } from '../entities/smsStat.entity';

@Injectable()
export class SmsStatService extends BaseService<SmsStat> {
  constructor(
    @InjectRepository(SmsStat) private readonly smsStatsService: Repository<SmsStat>,
  ) {
    super(smsStatsService);
  }
}
