import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prefix {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column()
  code: string;

  @Column()
  prefix: string;
}