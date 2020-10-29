import { Controller, Get } from '@nestjs/common';
import { CryptoHistoricalDataService } from '../service/crypto-historical-data.service';

@Controller('crypto-historical-data')
export class CryptoHistoricalDataController {
  constructor(private readonly cryptoHistoricalDataService: CryptoHistoricalDataService) {}

  @Get()
  async findAll(): Promise<string[]> {
    return await this.cryptoHistoricalDataService.findByCurrency('tezos');
  }
}
