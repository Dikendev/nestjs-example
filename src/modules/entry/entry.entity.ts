import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { Comment } from '../comment/comment.entity';

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
  
  @OneToMany((type) => Comment, (comment) => comment.id, {
    cascade: true,
  })
  comments: Comment[];

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @VersionColumn()
  revision: number;
}
