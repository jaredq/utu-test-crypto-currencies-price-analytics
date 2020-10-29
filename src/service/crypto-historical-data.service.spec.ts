import { Test, TestingModule } from '@nestjs/testing';
import { CryptoHistoricalDataService } from './crypto-historical-data.service';

describe('CryptoHistoricalDataService', () => {
  let service: CryptoHistoricalDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoHistoricalDataService],
    }).compile();

    service = module.get<CryptoHistoricalDataService>(CryptoHistoricalDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
