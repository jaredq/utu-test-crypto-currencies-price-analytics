import { Controller, Get } from '@nestjs/common';
import { CryptoHistoricalDataService } from '../service/crypto-historical-data.service';
import CryptoHistoricalData from '../entity/CryptoHistoricalData';
import PriceAnalyticsData from '../models/PriceAnalyticsData';

@Controller('price-analytics-data')
export class PriceAnalyticsDataController {
  constructor(private readonly cryptoHistoricalDataService: CryptoHistoricalDataService) { }

  @Get()
  async findAll(): Promise<PriceAnalyticsData[]> {
    const historicalDataList: CryptoHistoricalData[] = await this.cryptoHistoricalDataService.findLatestByCurrency('eos');
    console.log('historicalDataList', historicalDataList);

    // TODO
    const dummyPriceDataList: PriceAnalyticsData[] = [
      {
        currency: 'tezos',
        price: 1.9,
        changeDifferenceIn24Hours: -7.3,
        changeDifferenceIn7Days: 1.3,
        changeDifferenceIn1Month: 0.3,
        volumeIn24Hours: 236764423,
        marketCap: 1734823649,
        lastUpdatedDate: new Date(Date.UTC(2020, 9, 1, 0, 0, 0)),
      },
      {
        currency: 'bnb',
        price: 42.3,
        changeDifferenceIn24Hours: -2.3,
        changeDifferenceIn7Days: 12.3,
        changeDifferenceIn1Month: 4.3,
        volumeIn24Hours: 474423423,
        marketCap: 232236423,
        lastUpdatedDate: new Date(Date.UTC(2020, 9, 1, 0, 0, 0)),
      },
      {
        currency: 'eos',
        price: 82.1,
        changeDifferenceIn24Hours: -8.1,
        changeDifferenceIn7Days: 1.3,
        changeDifferenceIn1Month: 0.23,
        volumeIn24Hours: 8623423,
        marketCap: 477236423,
        lastUpdatedDate: new Date(Date.UTC(2020, 9, 1, 0, 0, 0)),
      },
      {
        currency: 'bitcoin',
        price: 12212.32,
        changeDifferenceIn24Hours: -17.3,
        changeDifferenceIn7Days: 1.3,
        changeDifferenceIn1Month: -10.3,
        volumeIn24Hours: 4353423423,
        marketCap: 34663436423,
        lastUpdatedDate: new Date(Date.UTC(2020, 9, 1, 0, 0, 0)),
      },
    ];
    const priceAnalyticsDataList: PriceAnalyticsData[] = dummyPriceDataList;

    return priceAnalyticsDataList;
  }
}
