import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CryptoHistoricalDataController } from './controller/crypto-historical-data.controller';
import { AppService } from './app.service';
import { CryptoHistoricalDataService } from './service/crypto-historical-data.service';

@Module({
  imports: [],
  controllers: [AppController, CryptoHistoricalDataController],
  providers: [AppService, CryptoHistoricalDataService],
})
export class AppModule {}
