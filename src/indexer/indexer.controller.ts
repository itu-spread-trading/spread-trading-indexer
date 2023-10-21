import { Controller, Logger } from '@nestjs/common';
import { IndexerService } from 'src/indexer/indexer.service';

@Controller('indexer')
export class IndexerController {
  constructor(private readonly indexerService: IndexerService) {}
  logger = new Logger(IndexerController.name);

  /**
   * @description Generate index of token list
   */
  genIndex() {
    this.indexerService.genIndex();
  }
}
