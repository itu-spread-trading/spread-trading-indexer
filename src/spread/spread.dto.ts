import { IsString } from 'class-validator';

export class SpreadQueryParams {
  /**
   * From date
   */
  from: string;

  /**
   * To date
   */
  to: string;

  /**
   * Symbol of the token pair to calculate spread for
   */
  symbol: string;
}

export class SpreadGraphQueryParams {
  /**
   * Symbol of the token pair to calculate the graph data
   */
  @IsString()
  symbol: string;

  /**
   * Interval of the graph data
   */
  interval: '1h' | '4h' | '1d';
}

export class SpreadResponse {
  /**
   * Spread between futures and spot
   */
  spread: number;

  /**
   * Date of spread
   */
  date: Date;
}

export class SpreadCandleResponse {
  open: number;
  high: number;
  low: number;
  close: number;
  date: Date;
}
