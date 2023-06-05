import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
