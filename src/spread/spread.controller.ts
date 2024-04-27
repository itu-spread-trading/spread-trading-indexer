import { Controller, Get, Logger, Query } from '@nestjs/common';
import {
  SpreadCandleResponse,
  SpreadGraphQueryParams,
  SpreadQueryParams,
  SpreadResponse,
} from 'src/spread/spread.dto';
import { SpreadService } from 'src/spread/spread.service';

@Controller('spread')
export class SpreadController {
  constructor(private readonly spreadService: SpreadService) {}
  logger = new Logger(SpreadController.name);

  /**
   * @description Get spread on given time interval
   * @param query Query parameters for getting spread
   */
  @Get()
  genSpread(@Query() query: SpreadQueryParams): Promise<SpreadResponse> {
    return this.spreadService.genSpread(query);
  }

  /**
   * @description Get graph for spread on given time interval
   * @param query Query parameters for getting spread graph
   */
  @Get('graph')
  genSpreadGraph(
    @Query() query: SpreadGraphQueryParams,
  ): Promise<Array<SpreadCandleResponse>> {
    return this.spreadService.genSpreadGraphData(query);
  }
}
