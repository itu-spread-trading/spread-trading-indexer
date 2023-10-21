import { Controller, Get, Logger } from '@nestjs/common';
import { TokenEntity } from 'src/entities/token.entity';
import { IndexerService } from 'src/indexer/indexer.service';

@Controller('indexer')
export class IndexerController {
  constructor(private readonly indexerService: IndexerService) {}
  logger = new Logger(IndexerController.name);

  /**
   * @description Generate index of token list
   */
  genIndex(): Promise<void> {
    return this.indexerService.genIndex();
  }

  /**
   * @description Get latest indexed token list
   */
  @Get('latest')
  genLatestTokens(): Promise<Array<TokenEntity>> {
    return this.indexerService.genLatestTokens();
  }
}
