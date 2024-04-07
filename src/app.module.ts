import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONFIG } from 'src/config';
import { IndexerModule } from 'src/indexer/indexer.module';
import { SpreadModule } from 'src/spread/spread.module';

@Module({
  imports: [
    // General
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(CONFIG.DATABASE),

    // Custom Modules
    IndexerModule,
    SpreadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
