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

export const USER_ROLES = {
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type UserRoles = keyof typeof USER_ROLES;

@Entity('role')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar', enum: USER_ROLES, default: USER_ROLES.STUDENT
  })
  public name: UserRoles;

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
    };
  }
}
