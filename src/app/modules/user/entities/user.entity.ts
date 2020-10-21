import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';
import { Contact } from '../../contact/entities/contact.entity';
import { UserInfo } from './userInfo.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({ unique: true, nullable: false, length: 20 })
  email: string;

  @Column({ nullable: false, length: 191 })
  password: string;

  @Column({ nullable: true, type: 'text' })
  token?: string;

  @Column({ nullable: true, type: 'text' })
  refreshToken?: string;

  @Column({ nullable: true, type: 'text' })
  webPushToken?: string;

  @Column({ nullable: true, type: 'text' })
  appToken?: string;

  @Column({ nullable: true, length: 5 })
  type?: string;

  @OneToOne(type => UserInfo)
  @JoinColumn()
  userInfo?: UserInfo

  @OneToMany(()=>Contact, contact => contact.user)
  contacts?: Contact[]
  
  constructor() {
    super();
  }
}
