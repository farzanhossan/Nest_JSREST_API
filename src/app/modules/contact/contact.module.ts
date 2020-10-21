import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { ContactController } from './controllers/contact.controller';
import { ContactService } from './services/contact.service';

import { ContactGroup } from './entities/contactGroup.entity';
import { ContactGroupController } from './controllers/contactGroup.controller';
import { ContactGroupService } from './services/contactGroup.service';

const SERVICES = [ContactService, ContactGroupService];

const SUBSCRIBERS = [];

const CONTROLLERS = [ContactController, ContactGroupController];

const ENTITIES = [Contact, ContactGroup];

@Module({
  imports: [TypeOrmModule.forFeature(ENTITIES)],
  providers: [...SERVICES, ...SUBSCRIBERS],
  controllers: [...CONTROLLERS],
  exports: [...SERVICES],
})
export class ContactModule {}
