import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenEntity } from 'src/entities/token.entity';
import {
  SpreadCandleResponse,
  SpreadGraphQueryParams,
  SpreadQueryParams,
  SpreadResponse,
} from 'src/spread/spread.dto';
import { FindOptionsWhere, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class SpreadService {
  private readonly logger = new Logger(SpreadService.name);

  constructor(
    @InjectRepository(TokenEntity)
    private tokenRepository: Repository<TokenEntity>,
  ) {}

  async genSpreadGraphData(
    query: SpreadGraphQueryParams,
  ): Promise<Array<SpreadCandleResponse>> {
    const currentDate = new Date();
    const threeWeeksBefore = new Date(
      currentDate.setDate(currentDate.getDate() - 22),
    );

    const allData = await this.tokenRepository.find({
      where: {
        symbol: query.symbol,
        date: MoreThanOrEqual(threeWeeksBefore),
      },
    });

    let intervalSize = 12;
    if (query.interval === '1h') {
      intervalSize = 12;
    } else if (query.interval === '4h') {
      intervalSize = 12 * 4;
    } else if (query.interval === '1d') {
      intervalSize = 12 * 24;
    }

    const groups: Array<Array<TokenEntity>> = [];

    for (let i = 0; i < allData.length; i += intervalSize) {
      const group = allData.slice(i, i + intervalSize);
      groups.push(group);
    }

    const graphData: Array<SpreadCandleResponse> = groups.map((group) => {
      const spreads = group.map((token) =>
        this.getSpreadFromTokenEntity(token),
      );
      return {
        open: spreads[0],
        high: Math.max(...spreads),
        low: Math.min(...spreads),
        close: spreads[spreads.length - 1],
        date: group[0].date,
      };
    });

    return graphData;
  }

  async genSpread(query: SpreadQueryParams): Promise<SpreadResponse> {
    const { symbol, from } = query;

    const findOptionsWhere: FindOptionsWhere<TokenEntity> = {
      symbol: symbol,
    };

    if (from != null) {
      findOptionsWhere.date = new Date(from);
    }

    const token = await this.tokenRepository.findOne({
      where: findOptionsWhere,
    });
    const spread = this.getSpreadFromTokenEntity(token);
    return {
      spread: spread,
      date: token.date,
    };
  }

  private getSpreadFromTokenEntity(token: TokenEntity): number {
    const futures_bid = Number(token.futures_best_bid_price);
    const spot_bid = Number(token.best_bid_price);

    return Math.log(futures_bid / spot_bid) * 100;
  }
}
