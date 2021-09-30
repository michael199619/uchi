import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseEntity } from '../../shared/entities';

export enum Education {
  SECONDARY,
  SECONDARY_SPECIAL,
  HIGHER
}

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'numeric', nullable: true
  })
  public working_years: number;

  @Column({
    type: 'numeric', nullable: true
  })
  public salary_revision_frequency: number;

  @Column({
    type: 'numeric', nullable: true
  })
  public age: number;

  @Column({
    type: 'varchar', enum: Education, nullable: true
  })
  public education: Education;

  @Column({
    type: 'numeric', nullable: true
  })
  public salary: number;

  @Column({
    type: 'boolean', nullable: true
  })
  public have_children: boolean;

  @Column({
    type: 'boolean', nullable: true
  })
  public have_mentor: boolean;

  @Column({
    type: 'json', nullable: true
  })
  public params: object;

  toJSON() {
    return {
      id: this.id,
      working_years: this.working_years,
      salary_revision_frequency: this.salary_revision_frequency,
      age: this.age,
      education: this.education,
      salary: this.salary,
      have_children: this.have_children,
      have_mentor: this.have_mentor,
    };
  }
}
