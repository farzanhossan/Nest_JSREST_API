import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../base/base.service';
import { SmsGateway } from '../entities/smsGateway.entity';

@Injectable()
export class SmsGatewayService extends BaseService<SmsGateway> {
  constructor(
    @InjectRepository(SmsGateway) private readonly smsGatewaysService: Repository<SmsGateway>,
  ) {
    super(smsGatewaysService);
  }
}
