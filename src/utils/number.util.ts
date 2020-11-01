export default class NumberUtil {
  /**
   * calculate percentage
   * @param base 
   * @param current 
   */
  static calcChangeDifferencePercentage(base: number, current: number): number {
    if (base == 0) {
      return undefined;
    }
    return ((current - base) / base) * 100;
  }
}
