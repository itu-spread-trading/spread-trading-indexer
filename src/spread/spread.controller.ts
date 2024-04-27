import { Controller, Get, Logger, Query } from '@nestjs/common';
import { SpreadQueryParams } from 'src/spread/spread.dto';
import { SpreadService } from 'src/spread/spread.service';

@Controller('spread')
export class SpreadController {
  constructor(private readonly spreadService: SpreadService) {}
  logger = new Logger(SpreadController.name);

  /**
   * @description Get spread on given time interval
   * @param query {SpreadQueryParams} Query parameters for getting spread
   */
  @Get()
  genSpread(@Query() query: SpreadQueryParams): Promise<void> {
    return this.spreadService.genSpread(query);
  }
}
