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

/**
 * Get the difference of days between two dates
 *
 * @param   {string | Date} d1  Start date.
 * @param   {string | Date} d2  End date.
 * @returns {number}            Difference in days
 */
export const dayDiff = (d1: Date, d2: Date): number => {
  let time;
  let days;

  if (isDate(d1) && isDate(d2)) {
    // Time difference
    time = d2.getTime() - d1.getTime();

    // Number of days based on time difference
    days = time / (1000 * 3600 * 24);

    return days;
  } else {
    throw Error("Invalid input, expects only instances of Date");
  }
};

/**
 * Convert a number into currency format
 *
 * @param {Number} number Number to be converted
 * @return {String} The number converted
 */
export const numberToCurrency = (number: number): string => {
  return new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};
