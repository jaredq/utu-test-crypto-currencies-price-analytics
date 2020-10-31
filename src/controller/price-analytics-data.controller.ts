import { Controller, Get, Param } from '@nestjs/common';
import { CryptoHistoricalDataService } from '../service/crypto-historical-data.service';
import CryptoHistoricalData from '../entity/CryptoHistoricalData';
import PriceAnalyticsData from '../models/PriceAnalyticsData';
import currencyTypes from '../constants/currency-types';

import PriceAnalyticsUtil from '../utils/price-analytics.util';

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

    const priceAnalyticsData: PriceAnalyticsData = PriceAnalyticsUtil.analyePrice(historicalDataList);

    return priceAnalyticsData;
  }
}
