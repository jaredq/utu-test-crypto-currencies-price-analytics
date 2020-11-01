import { Test, TestingModule } from '@nestjs/testing';
import { createConnection } from 'typeorm';
import CryptoHistoricalData from '../entity/crypto-historical-data';
import { CryptoHistoricalDataService } from './crypto-historical-data.service';

describe('CryptoHistoricalDataService', () => {
  let service: CryptoHistoricalDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CryptoHistoricalData],
      providers: [CryptoHistoricalDataService],
    }).compile();

    service = module.get<CryptoHistoricalDataService>(CryptoHistoricalDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
