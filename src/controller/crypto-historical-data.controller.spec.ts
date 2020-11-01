import { Test, TestingModule } from '@nestjs/testing';
import CryptoHistoricalData from '../entity/crypto-historical-data';
import { CryptoHistoricalDataService } from '../service/crypto-historical-data.service';
import { CryptoHistoricalDataController } from './crypto-historical-data.controller';

describe('CryptoHistoricalDataController', () => {
  let controller: CryptoHistoricalDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CryptoHistoricalData],
      controllers: [CryptoHistoricalDataController],
      providers: [CryptoHistoricalDataService],
    }).compile();

    controller = module.get<CryptoHistoricalDataController>(CryptoHistoricalDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
