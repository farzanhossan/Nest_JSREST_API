import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';
import { User } from '../../user/entities/user.entity';
import { ContactGroup } from './contactGroup.entity';

@Entity('contacts')
export class Contact extends BaseEntity {

  @Column({ nullable: false, length: 20 })
  number?: string;

  @Column({ nullable: true, length: 191 })
  firstName?: string;

  @Column({ nullable: true, length: 191 })
  lastName?: string;

  @Column({ nullable: true, length: 10 })
  gender?: string;

  @Column({ nullable: true, length: 191 })
  address?: string;

  @Column({ nullable: true, length: 191 })
  company?: string;

  @Column({ nullable: true, length: 191 })
  email?: string;

  @Column({ nullable: true})
  dob?: Date;

  @Column({ nullable: true, length: 191 })
  age?: string;

  @OneToMany(()=> ContactGroup, contactGroup => contactGroup.contacts)
  contactGroup?: ContactGroup[]

  @ManyToOne(()=> User, user => user.contacts)
  user?: User;

  constructor() {
    super();
  }
}
