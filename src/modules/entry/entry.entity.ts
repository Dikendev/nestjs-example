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

  @Column('text')
  title: string;
  @Column('text')
  body: string;
  @Column()
  image: string;
  @Column('simple-json')
  author: { first_name: string; last_name: string };
  @CreateDateColumn()
  create_at: Date;
  @UpdateDateColumn()
  modified_at: Date;
  @VersionColumn()
  revision: number;
}
