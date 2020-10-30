import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity()
export default class CryptoHistoricalData {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  currency: string;

  @Column()
  date: Date;

  @Column()
  open: number;

  @Column()
  high: number;

  @Column()
  low: number;

  @Column()
  close: number;

  @Column()
  volume: number;

  @Column()
  marketCap: number;
}
