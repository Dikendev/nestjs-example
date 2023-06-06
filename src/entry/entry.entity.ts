import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
  @Column()
  body: string;
  @Column()
  image: string;
  @CreateDateColumn()
  create_at: Date;
  @UpdateDateColumn()
  modified_at: Date;
  @VersionColumn()
  revision: number;
}
