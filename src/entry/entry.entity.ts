import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Entry {
  @PrimaryColumn()
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
