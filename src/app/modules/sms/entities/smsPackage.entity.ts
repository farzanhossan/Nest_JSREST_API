import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';

@Entity('sms_packages')
export class SmsPackage extends BaseEntity {
  @Column({ nullable: false, length: 50 })
  name?: string;

  @Column({ nullable: false})
  maskRate?: number;

  @Column({ nullable: false})
  nonmaskRate?: number;

  constructor() {
    super();
  }
}
