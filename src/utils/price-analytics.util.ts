import CryptoHistoricalData from '../entity/crypto-historical-data';
import PriceAnalyticsData from '../models/price-analytics-data';

import NumberUtil from './number.util';

import {
  ROW_NO_FOR_LATEST_DATA,
  ROW_NO_FOR_ONE_DAY_AGO,
  ROW_NO_FOR_SEVEN_DAYS_AGO,
  ROW_NO_FOR_ONE_MONTH_AGO,
  MAX_ROWS_FOR_ANALYTICS,
} from '../constants/constants';

export default class PriceAnalyticsUtil {
  static analyePrice(
    cryptoHistoricalDataList: CryptoHistoricalData[],
  ): PriceAnalyticsData {
    let result: PriceAnalyticsData;

    let latestData: CryptoHistoricalData;
    let earlyData: CryptoHistoricalData;
    for (
      let i = 0;
      i < cryptoHistoricalDataList.length && i < MAX_ROWS_FOR_ANALYTICS;
      i++
    ) {
      if (i === ROW_NO_FOR_LATEST_DATA) {
        latestData = cryptoHistoricalDataList[i];
        result = {
          currency: latestData.currency,
          price: latestData.close,
          volumeIn24Hours: latestData.volume,
          marketCap: latestData.marketCap,
        };
      } else if (i === ROW_NO_FOR_ONE_DAY_AGO) {
        earlyData = cryptoHistoricalDataList[i];
        result.changeDifferenceIn24Hours = NumberUtil.calcChangeDifferencePercentage(
          earlyData.close,
          latestData.close,
        );
      } else if (i === ROW_NO_FOR_SEVEN_DAYS_AGO) {
        earlyData = cryptoHistoricalDataList[i];
        result.changeDifferenceIn7Days = NumberUtil.calcChangeDifferencePercentage(
          earlyData.close,
          latestData.close,
        );
      } else if (i === ROW_NO_FOR_ONE_MONTH_AGO) {
        earlyData = cryptoHistoricalDataList[i];
        result.changeDifferenceIn1Month = NumberUtil.calcChangeDifferencePercentage(
          earlyData.close,
          latestData.close,
        );
      }
    }
    return result;
  }
}
