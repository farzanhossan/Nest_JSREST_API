import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../base/base.service';
import { TransactionLog } from '../entities/transactionLog.entity';

@Injectable()
export class TransactionLogService extends BaseService<TransactionLog> {
  constructor(
    @InjectRepository(TransactionLog) private readonly transactionLogsService: Repository<TransactionLog>,
  ) {
    super(transactionLogsService);
  }
}
