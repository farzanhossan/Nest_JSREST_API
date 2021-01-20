import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user.controller';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './services/user.service';

const SERVICES = [UserService];

const CONTROLLERS = [UserController];

const SCHEMAS = [{ name: User.name, schema: UserSchema }];

@Module({
  imports: [MongooseModule.forFeature(SCHEMAS)],
  providers: [...SERVICES],
  controllers: [...CONTROLLERS],
  exports: [...SERVICES],
})
export class UserModule {}
