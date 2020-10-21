import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';
import { Contact } from './contact.entity';

@Entity('contact_groups')
export class ContactGroup extends BaseEntity {

  @Column({ nullable: true, length: 191 })
  name?: string;

  @Column({ nullable: true, type: 'jsonb' })
  customFields?: any;

  @Column({ nullable: true, type: 'jsonb' })
  selectedFields?: any;

  @ManyToOne(() => Contact, contact => contact.contactGroup)
  contacts?: Contact
  
  constructor() {
    super();
  }
}
