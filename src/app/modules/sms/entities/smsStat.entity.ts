import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';

@Entity('sms_stats')
export class SmsStat extends BaseEntity {
  @Column({ nullable: false})
  date?: Date;

  @Column({ nullable: false})
  totalSubmited?: number;

  @Column({ nullable: false })
  failed?: number;

  @Column({ nullable: false })
  totalSent?: number;

  @Column({ nullable: false })
  totalSentCount?: number;

  @Column({ nullable: false })
  maskSent?: number;

  @Column({ nullable: false })
  maskSentCount?: number;

  @Column({ nullable: false })
  fallbackSent?: number;

  @Column({ nullable: false })
  fallbackSentCount?: number;

  constructor() {
    super();
  }
}
