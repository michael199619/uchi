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

@Entity('lib')
export class Lib extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar'
  })
  public url: string;

  @Column({
    type: 'integer'
  })
  public subjectId: number;

  @Column({
    type: 'integer'
  })
  public categoryId: number;

  toJSON() {
    return {
      id: this.id,
      subjectId: this.subjectId,
      categoryId: this.categoryId,
      createdAt: this.createdAt,
    };
  }
}
