import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';

@Entity('sms_gateways')
export class SmsGateway extends BaseEntity {
  @Column({ nullable: false, length: 50 })
  uid?: string;

  @Column({ nullable: false, length: 191 })
  name?: string;

  @Column({ nullable: false, length: 20 })
  operator?: string;

  @Column({ nullable: false, length: 20 })
  originatingNumber?: string;

  @Column({ nullable: false, length: 50 })
  username?: string;

  @Column({ nullable: false, length: 100 })
  password?: string;

  @Column({ nullable: false })
  maxConcurrentReq?: number;

  @Column({ nullable: false })
  balance?: number;

  @Column({ nullable: false, length: 25 })
  status?: string;

  @Column({ nullable: false, length: 191 })
  prefixes?: string;

  @Column({ nullable: false })
  lastModifiedBy?: number;

  constructor() {
    super();
  }
}
