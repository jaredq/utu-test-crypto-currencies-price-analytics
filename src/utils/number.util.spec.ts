import { Test } from '@nestjs/testing';
import NumberUtil from './number.util';

describe('NumberUtil', () => {
  it('calcChangeDifferencePercentage', () => {
    expect(NumberUtil.calcChangeDifferencePercentage(50, 10)).toBe(-80);
    expect(NumberUtil.calcChangeDifferencePercentage(50, 60)).toBe(20);
  });
});