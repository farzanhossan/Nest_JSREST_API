import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';

@Entity('transaction_logs')
export class TransactionLog extends BaseEntity {
  @Column({nullable: false })
  amount?: number;

  @Column({ nullable: false, length: 20 })
  eventType?: string;

  @Column({ nullable: false, length: 191 })
  trxRef?: string;

  @Column({ nullable: false, length: 191 })
  remarks?: string;

  @Column({ nullable: false, length: 200 })
  description?: string;

  constructor() {
    super();
  }
}
