import { Controller, Get, Param } from '@nestjs/common';
import { CryptoHistoricalDataService } from '../service/crypto-historical-data.service';
import CryptoHistoricalData from '../entity/CryptoHistoricalData';
import PriceAnalyticsData from '../models/PriceAnalyticsData';
import currencyTypes from '../constants/CurrencyTypes';

@Controller('price-analytics-data')
export class PriceAnalyticsDataController {
  constructor(
    private readonly cryptoHistoricalDataService: CryptoHistoricalDataService,
  ) {}

  @Get()
  async findAll(): Promise<PriceAnalyticsData[]> {
    return Promise.all(
      currencyTypes.map(async currency => {
        return await this.findOne({ currency });
      }),
    );
  }

  @Get(':currency')
  async findOne(@Param() params): Promise<PriceAnalyticsData> {
    const { currency } = params;
    if (currencyTypes.indexOf(currency) < 0) {
      return {
        currency,
        error: 'Unknown currency.',
      };
    }

    const limit = 31;
    const historicalDataList: CryptoHistoricalData[] = await this.cryptoHistoricalDataService.findLatestByCurrency(
      currency,
      limit,
    );
    // TODO remove console log
    console.log('historicalDataList', historicalDataList);
    if (historicalDataList.length === 0) {
      return {
        currency,
        error: 'No historical data found.',
      };
    }

    // TODO finish analytics
    const dummyPriceData: PriceAnalyticsData = {
      currency,
      price: 82.1,
      changeDifferenceIn24Hours: -8.1,
      changeDifferenceIn7Days: 1.3,
      changeDifferenceIn1Month: 0.23,
      volumeIn24Hours: 8623423,
      marketCap: 477236423,
      lastUpdatedDate: new Date(Date.UTC(2020, 9, 1, 0, 0, 0)),
    };
    const priceAnalyticsData: PriceAnalyticsData = dummyPriceData;

    return priceAnalyticsData;
  }
}
