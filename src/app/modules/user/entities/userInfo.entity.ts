import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';

@Entity('user_infos')
export class UserInfo extends BaseEntity {
  @Column({ nullable: false, length: 50 })
  name?: string;

  @Column({ nullable: true, length: 50 })
  designation?: string;

  @Column({ nullable: true, length: 50 })
  company?: string;

  @Column({ nullable: true, length: 200 })
  address?: string;

  @Column({ nullable: false, length: 50 })
  email?: string;

  @Column({ nullable: false, length: 20 })
  phone?: string;

  @Column({ nullable: false, length: 25, default: 'USER'})
  role?: string;

  @Column({ nullable: false, default: '1' })
  isPrepaid?: number;

  @Column({ nullable: false, length: 25 })
  status?: string;

  @Column({default: '0', nullable: false })
  creditLimit?: number;

  @Column({nullable: false })
  balance?: number;

  constructor() {
    super();
  }
}
