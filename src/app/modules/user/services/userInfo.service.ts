import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../base/base.service';
import { UserInfo } from '../entities/userInfo.entity';

@Injectable()
export class UserInfoService extends BaseService<UserInfo> {
  constructor(
    @InjectRepository(UserInfo) private readonly userInfosService: Repository<UserInfo>,
  ) {
    super(userInfosService);
  }
}
