import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({ name: "citidata" })
export class CitiData {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  lat: string;
  @Column()
  lon: string;
  @Column()
  temp: string;
  @Column()
  visibility: string;
  @Column()
  lastUpdatedAt: Date;
}