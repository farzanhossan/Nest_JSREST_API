import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';

@Entity('sms_masks')
export class SmsMask extends BaseEntity {
  @Column({ nullable: false, length: 20 })
  mask?: string;

  @Column({ nullable: false, length: 25 })
  status?: string;

  constructor() {
    super();
  }
}
