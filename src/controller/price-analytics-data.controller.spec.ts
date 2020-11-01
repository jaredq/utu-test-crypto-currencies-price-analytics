import { Test, TestingModule } from '@nestjs/testing';
import CryptoHistoricalData from '../entity/crypto-historical-data';
import { CryptoHistoricalDataService } from '../service/crypto-historical-data.service';
import { PriceAnalyticsDataController } from './price-analytics-data.controller';

describe('PriceAnalyticsDataController', () => {
  let controller: PriceAnalyticsDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CryptoHistoricalData],
      controllers: [PriceAnalyticsDataController],
      providers: [CryptoHistoricalDataService],
    }).compile();

    controller = module.get<PriceAnalyticsDataController>(PriceAnalyticsDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
