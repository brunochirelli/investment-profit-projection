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
