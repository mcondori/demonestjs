import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Identidad {
  @PrimaryColumn({ name: 'id_num' })
  idNum: number;

  @Column({ nullable: true })
  nombres: string;

  @Column({ nullable: true })
  url: string;
}
