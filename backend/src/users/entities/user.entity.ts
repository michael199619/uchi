import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseEntity } from '../../shared/entities';
import {Role, USER_ROLES, UserRoles} from "./role.entity";

export const USER_STATUS = {
  ACTIVE: 'TEACHER',
  NOACTIVE: 'NOACTIVE'
};

export type UserStatus = keyof typeof USER_STATUS;

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'numeric', nullable: true
  })
  public age: number;

  @Column({
    type: 'varchar', nullable: true
  })
  public firstName: string;

  @Column({
    type: 'varchar', nullable: true
  })
  public avatar: string;

  @Column({
    type: 'varchar', nullable: true
  })
  public lastName: string;

  @Column('int', {nullable: true, unsigned: true})
  roleId: number;
  role: Role;

  @Column({
    type: 'varchar', enum: USER_STATUS, default: USER_STATUS.NOACTIVE, nullable: true
  })
  status: UserStatus;

  toJSON() {
    return {
      id: this.id,
      age: this.age,
      roleId: this.roleId,
      role: this.role,
      status: this.status,
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }
}
