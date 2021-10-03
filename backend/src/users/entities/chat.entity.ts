import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { BaseEntity } from '../../shared/entities';

@Entity('chat')
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar'
  })
  public msg: string;

  @Column({
    type: 'integer'
  })
  public fromId: number;

  @Column({
    type: 'integer'
  })
  public toId: number;

  toJSON() {
    return {
      id: this.id,
      fromId: this.fromId,
      toId: this.toId,
      msg: this.msg,
      createdAt: this.createdAt,
    };
  }
}
