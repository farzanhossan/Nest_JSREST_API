import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../base/base.service';
import { SmsPackage } from '../entities/smsPackage.entity';

@Injectable()
export class SmsPackageService extends BaseService<SmsPackage> {
  constructor(
    @InjectRepository(SmsPackage) private readonly smsPackagesService: Repository<SmsPackage>,
  ) {
    super(smsPackagesService);
  }
}
