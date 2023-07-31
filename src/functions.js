// CONVERT NUM TO THE MONEY CURRENCY
export const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  })
    .format(value)
    .replace(/(\.|,)00$/g, "");
};
