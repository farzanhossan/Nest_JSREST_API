import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';

@Entity('sms_entries')
export class SmsEntry extends BaseEntity {
  @Column({ nullable: true, length: 100})
  ref?: string;

  @Column({ nullable: false, length: 191})
  campaignName?: string;

  @Column({ nullable: false, length: 191 })
  method?: string;

  @Column({ nullable: false})
  body?: string;

  @Column({ nullable: false})
  type?: number;

  @Column({ nullable: false })
  length?: number;

  @Column({ nullable: false})
  count?: number;

  @Column({ nullable: false, length: 20})
  recipient?: string;

  @Column({ nullable: true, length: 50 })
  gatewayUid?: string;

  @Column({ nullable: true, length: 500})
  gatewayUidFallback?: string;

  @Column({ nullable: false})
  fallback?: number;

  @Column({ nullable: false })
  isNonMaskAllowed?: number;

  @Column({ nullable: false})
  isNonMaskSent?: number;

  @Column({ nullable: false, length: 191})
  mask?: string;

  @Column({ nullable: false, length: 25, default: 'SUBMITTED' })
  status?: string;

  @Column({ nullable: true, length: 191})
  errorCause?: string;

  @Column({ nullable: false, length: 1600})
  remarks?: string;

  @Column({ nullable: false })
  priority?: number;

  @Column({ nullable: false})
  retryCount?: number;

  @Column({ nullable: false})
  scheduledAt?: Date;

  @Column({ nullable: true })
  sentAt?: Date;

  @Column({ nullable: true})
  deliveredAt?: Date;

  @Column({ nullable: true})
  campaignId?: number;

  @Column({ nullable: false, length: 191 })
  deliveryStatus?: string;

  @Column({ nullable: false})
  dlr?: number;

  @Column({ nullable: true})
  expiredAt?: Date;

  constructor() {
    super();
  }
}
