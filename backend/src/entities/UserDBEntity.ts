import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserDBEntity extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  passwordHash!: string;
}