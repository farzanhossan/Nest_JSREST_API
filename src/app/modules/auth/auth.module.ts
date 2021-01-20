import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/user.module';
import { AdminAuthController } from './controllers/auth.admin.controller';
import { UserAuthController } from './controllers/auth.user.controller';

const CONTROLLERS = [AdminAuthController, UserAuthController];

@Module({
  imports: [MongooseModule.forFeature(), UserModule],
  controllers: [...CONTROLLERS],
})
export class AuthModule {}
