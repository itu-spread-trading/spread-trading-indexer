import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenEntity } from 'src/entities/token.entity';
import { SpreadQueryParams } from 'src/spread/spread.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SpreadService {
  private readonly logger = new Logger(SpreadService.name);

  constructor(
    @InjectRepository(TokenEntity)
    private tokenRepository: Repository<TokenEntity>,
  ) {}

  async genSpread(query: SpreadQueryParams): Promise<void> {
    return;
  }
}
