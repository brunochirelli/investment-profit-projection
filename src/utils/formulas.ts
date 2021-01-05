/**
 * Future Value (FV) function like Excel.
 *
 * @param   {number}  rate  Required. The interest rate per period.
 * @param   {number}  nper  Required. The total number of payment periods in an
 *                          annuity.
 * @param   {number}  pmt   Required. The payment made each period; it cannot
 *                          change over the life of the annuity.
 * @param   {0 | 1}   pv    Optional. The present value, or the lump-sum amount that
 *                          a series of future payments is worth right now. If pv
 *                          is omitted, it is assumed to be 0 (zero), and you must
 *                          include the pmt argument.
 * @param   {0 | 1}   type  Optional. The number 0 or 1 and indicates when
 *                          payments are due. If type is omitted, it is assumed to
 *                          be 0.
 *
 * @returns {number} FV Result in full number
 *
 */
export const futureValue = (
  rate: number,
  nper: number,
  pmt: number,
  pv: number = 0,
  type: 0 | 1 = 0
): number => {
  let pow = Math.pow(1 + rate, nper);
  let fv;

  if (rate) {
    fv = (pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow;
  } else {
    fv = -1 * (pv + pmt * nper);
  }
  return Number(fv.toFixed(2));
};

export const incomeTaxCalculator = (days: number): number => {
  if (typeof days === "number") {
    if (days <= 180) {
      return 0.225;
    }

    if (days > 180 && days <= 360) {
      return 0.2;
    }

    if (days > 360 && days <= 720) {
      return 0.175;
    }

    if (days > 720) {
      return 0.15;
    }
  } else {
    throw new Error(`days should be a number. Instead receive: ${typeof days}`);
  }

  return days;
};
