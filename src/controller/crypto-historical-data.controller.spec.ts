import { Test, TestingModule } from '@nestjs/testing';
import { CryptoHistoricalDataController } from './crypto-historical-data.controller';

describe('CryptoHistoricalDataController', () => {
  let controller: CryptoHistoricalDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CryptoHistoricalDataController],
    }).compile();

    controller = module.get<CryptoHistoricalDataController>(CryptoHistoricalDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
