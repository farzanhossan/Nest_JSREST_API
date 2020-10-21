import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserModule } from '../user/user.module';
import { AdminAuthController } from './controllers/auth.admin.controller';
import { UserAuthController } from './controllers/auth.user.controller';

const CONTROLLERS = [AdminAuthController, UserAuthController];

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserModule],
  controllers: [...CONTROLLERS],
})
export class AuthModule {}
