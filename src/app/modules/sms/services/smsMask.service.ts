import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../base/base.service';
import { SmsMask } from '../entities/smsMask.entity';

@Injectable()
export class SmsMaskService extends BaseService<SmsMask> {
  constructor(
    @InjectRepository(SmsMask) private readonly smsMasksService: Repository<SmsMask>,
  ) {
    super(smsMasksService);
  }
}
