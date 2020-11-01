export default class NumberUtil {
  /**
   * calculate percentage
   * @param base 
   * @param current 
   */
  static calcChangeDifferencePercentage(base: number, current: number) {
    return ((current - base) / base) * 100;
  }
}
