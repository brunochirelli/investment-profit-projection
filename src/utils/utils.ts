/**
 * Checks if an input is instanceof Date
 *
 * @param   {any}     date  Value to be checked.
 * @returns {boolean}
 *
 */
export const isDate = (date: any): boolean => {
  return date instanceof Date && !isNaN(new Date(date).getFullYear());
};

/**
 * Get the difference of months between two dates
 *
 * @param   {string | Date} d1  Start date.
 * @param   {string | Date} d2  End date.
 * @returns {number}            Difference of months
 */
export const monthDiff = (d1: Date, d2: Date): number => {
  if (isDate(d1) && isDate(d2)) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();

    return months;
  } else {
    throw Error("Invalid input, expects only instances of Date");
  }
};
