import { Test, TestingModule } from '@nestjs/testing';
import { PriceAnalyticsDataController } from './price-analytics-data.controller';

describe('PriceAnalyticsDataController', () => {
  let controller: PriceAnalyticsDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceAnalyticsDataController],
    }).compile();

    controller = module.get<PriceAnalyticsDataController>(PriceAnalyticsDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
