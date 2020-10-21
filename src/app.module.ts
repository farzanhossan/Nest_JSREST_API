import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import { AuthModule } from './app/modules/auth/auth.module';
import { UserModule } from './app/modules/user/user.module';
import { SmsModule } from './app/modules/sms/sms.module';
import { ContactModule } from './app/modules/contact/contact.module';
import { UploadModule } from './app/modules/upload/upload.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.DATABASE.TYPE,
      host: config.DATABASE.HOST,
      port: config.DATABASE.PORT,
      username: config.DATABASE.USER,
      password: config.DATABASE.PASSWORD,
      database: config.DATABASE.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    UserModule,
    SmsModule,
    ContactModule,
    UploadModule
  ],
})
export class AppModule {}
