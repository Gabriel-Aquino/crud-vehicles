import { Entity, PrimaryColumn, Column } from 'typeorm';
import 'reflect-metadata';

@Entity()
export default class Vehicles {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  plate: string;

  @Column()
  chassi: string;

  @Column()
  renavam: number;

  @Column()
  model: string;

  @Column()
  trademark: string;

  @Column()
  year: number;
}
