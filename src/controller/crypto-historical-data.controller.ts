import { Controller, Get } from '@nestjs/common';
import { CryptoHistoricalDataService } from '../service/crypto-historical-data.service';

@Controller('crypto-historical-data')
export class CryptoHistoricalDataController {
  constructor(private readonly cryptoHistoricalDataService: CryptoHistoricalDataService) {}

  @Get()
  findAll(): string {
    return this.cryptoHistoricalDataService.findAll();
  }
}
