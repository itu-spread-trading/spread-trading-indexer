import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('token')
export class TokenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  @Column({ type: 'float' })
  futures_price: number;

  @Column({ type: 'float' })
  spot_price: number;

  @Column()
  best_bid_price: string;

  @Column()
  best_bid_qty: string;

  @Column()
  best_ask_price: string;

  @Column()
  best_ask_qty: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  date: Date;
}
