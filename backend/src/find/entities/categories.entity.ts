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

@Entity('categories')
export class Categories extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar', nullable: true
  })
  public fileType: string;

  @Column({
    type: 'varchar', nullable: true
  })
  public searchType: string;

  @Column({
    type: 'varchar', nullable: true
  })
  public linkSite: string;

  @Column({
    type: 'varchar'
  })
  public name: string;

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
    };
  }
}
