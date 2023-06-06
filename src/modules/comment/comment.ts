import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  body: string;
  @Column('simple-json')
  author: { first_name: string; last_name: string };
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  modified_at: Date;
  @VersionColumn()
  revision: number;
}
