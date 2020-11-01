import { Test } from '@nestjs/testing';
import PriceAnalyticsUtil from './price-analytics.util';

describe('PriceAnalyticsUtil', () => {
  it('analyePrice', () => {
    expect(PriceAnalyticsUtil.analyePrice([])).toBeUndefined();
  });
});