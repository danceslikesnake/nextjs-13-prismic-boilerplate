import { isNaN, isNull, isUndefined } from 'lodash';

export const isNotNull = (value) => !isNull(value);

export const isNotUndefined = (value) => !isUndefined(value);

export const isNotNullOrUndefined = (value) =>
  isNotNull(value) || isNotUndefined(value);

export const isNotEmptyObject = (value) => Object.keys(value).length > 0;

export const isNotNullOrZero = (value) =>
  isNotNull(value) && Number(value) !== 0 && !isNaN(value);

export const isNotNullOrEmptyString = (value) =>
  isNotNull(value) && value !== '';

export const formatCurrency = (value, currencyCode, locale) => {
  const formatter = new Intl.NumberFormat(locale ? locale : undefined, {
    style: 'currency',
    currency: currencyCode ? currencyCode : 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(value);
};
