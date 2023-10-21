import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONFIG } from 'src/config';
import { IndexerModule } from 'src/indexer/indexer.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    IndexerModule,
    TypeOrmModule.forRoot(CONFIG.DATABASE),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
