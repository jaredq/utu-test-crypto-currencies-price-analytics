import CryptoHistoricalData from '../entity/CryptoHistoricalData';
import PriceAnalyticsData from '../models/PriceAnalyticsData';

import NumberUtil from './number.util';

const ROW_NO_FOR_LATEST_DATA = 0;
const ROW_NO_FOR_ONE_DAY_AGO = 1;
const ROW_NO_FOR_SEVEN_DAYS_AGO = 7;
const ROW_NO_FOR_ONE_MONTH_AGO = 30;
const MAX_ROWS_FOR_ANALYTICS = ROW_NO_FOR_ONE_MONTH_AGO;

export default class PriceAnalyticsUtil {
  static analyePrice(
    cryptoHistoricalDataList: CryptoHistoricalData[],
  ): PriceAnalyticsData {
    let result: PriceAnalyticsData;

    let latestData: CryptoHistoricalData;
    let earlyData: CryptoHistoricalData;
    for (let i = 0; i < cryptoHistoricalDataList.length && i <= MAX_ROWS_FOR_ANALYTICS; i++) {
      if (i == ROW_NO_FOR_LATEST_DATA) {
        latestData = cryptoHistoricalDataList[i];
        result = {
          currency: latestData.currency,
          price: latestData.close,
          volumeIn24Hours: latestData.volume,
          marketCap: latestData.marketCap,
        }
      } else if (i == ROW_NO_FOR_ONE_DAY_AGO) {
        earlyData = cryptoHistoricalDataList[i];
        result.changeDifferenceIn24Hours = NumberUtil.percentage(earlyData.close, latestData.close);
      } else if (i == ROW_NO_FOR_SEVEN_DAYS_AGO) {
        earlyData = cryptoHistoricalDataList[i];
        result.changeDifferenceIn7Days = NumberUtil.percentage(earlyData.close, latestData.close);
      } else if (i == ROW_NO_FOR_ONE_MONTH_AGO) {
        earlyData = cryptoHistoricalDataList[i];
        result.changeDifferenceIn1Month = NumberUtil.percentage(earlyData.close, latestData.close);
      }
    }
    return result;
  }
}
