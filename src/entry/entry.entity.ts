import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  body: string;
  @Column()
  image: string;
  @Column()
  create_at: Date;
}
