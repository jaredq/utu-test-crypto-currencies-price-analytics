import { Controller, Get } from '@nestjs/common';
import CryptoHistoricalData from '../entity/crypto-historical-data';
import { CryptoHistoricalDataService } from '../service/crypto-historical-data.service';

@Controller('crypto-historical-data')
export class CryptoHistoricalDataController {
  constructor(private readonly cryptoHistoricalDataService: CryptoHistoricalDataService) {}

  @Get()
  async findAll(): Promise<CryptoHistoricalData[]> {
    return await this.cryptoHistoricalDataService.findAll();
  }
}
