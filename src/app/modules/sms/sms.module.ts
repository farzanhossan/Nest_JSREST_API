import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsPackage } from './entities/smsPackage.entity';
import { SmsPackageController } from './controllers/smsPackage.controller';
import { SmsPackageService } from './services/smsPackage.service';
import { SmsStat } from './entities/smsStat.entity';
import { SmsStatController } from './controllers/smsStat.controller';
import { SmsStatService } from './services/smsStat.service';
import { SmsEntry } from './entities/smsEntry.entity';
import { SmsEntryController } from './controllers/smsEntry.controller';
import { SmsEntryService } from './services/smsEntry.service';
import { SmsMask } from './entities/smsMask.entity';
import { SmsMaskController } from './controllers/smsMask.controller';
import { SmsMaskService } from './services/smsMask.service';

import { SmsGateway } from './entities/smsGateway.entity';
import { SmsGatewayController } from './controllers/smsGateway.controller';
import { SmsGatewayService } from './services/smsGateway.service';

const SERVICES = [SmsPackageService, SmsStatService, SmsEntryService, SmsMaskService, SmsGatewayService];

const SUBSCRIBERS = [];

const CONTROLLERS = [SmsPackageController, SmsStatController, SmsEntryController, SmsMaskController, SmsGatewayController];

const ENTITIES = [SmsPackage, SmsStat, SmsEntry, SmsMask, SmsGateway];

@Module({
  imports: [
    TypeOrmModule.forFeature(ENTITIES)
  ],
  providers: [...SERVICES, ...SUBSCRIBERS],
  controllers: [...CONTROLLERS],
  exports: [...SERVICES],
})
export class SmsModule {}
