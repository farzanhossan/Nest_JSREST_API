import { UserSubscriber } from './subscribers/user.subscriber';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TransactionLogService } from './services/transactionLog.service';
import { TransactionLogController } from './controllers/transactionLog.controller';
import { TransactionLog } from './entities/transactionLog.entity';
import { UserInfo } from './entities/userInfo.entity';
import { UserInfoController } from './controllers/userInfo.controller';
import { UserInfoService } from './services/userInfo.service';

const SERVICES = [UserService, UserInfoService, TransactionLogService];

const SUBSCRIBERS = [UserSubscriber];

const CONTROLLERS = [
  UserController,
  UserInfoController,
  TransactionLogController,
];

const ENTITIES = [User, UserInfo, TransactionLog];

@Module({
  imports: [TypeOrmModule.forFeature(ENTITIES)],
  providers: [...SERVICES, ...SUBSCRIBERS],
  controllers: [...CONTROLLERS],
  exports: [...SERVICES],
})
export class UserModule {}
