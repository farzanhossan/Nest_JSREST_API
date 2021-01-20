import { Module } from '@nestjs/common';
import { AuthModule } from './app/modules/auth/auth.module';
import { UploadModule } from './app/modules/upload/upload.module';
import { UserModule } from './app/modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:admin123@cluster0.f42ak.mongodb.net/rest-api?retryWrites=true&w=majority',
    ),
    AuthModule,
    UserModule,
    UploadModule,
  ],
})
export class AppModule {}
