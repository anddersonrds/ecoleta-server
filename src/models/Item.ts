import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items')
class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  image: string;
}

export default Item;
