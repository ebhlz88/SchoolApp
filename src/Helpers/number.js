/**
 * Use to format pricing text into the correct format in the design
 *
 * @param   {string | number} pricing
 * @return  {string} Formatted text (Eg: 2 478,00)
 */
export const formatPricing = (pricing) => {
  const number = Number(pricing);

  if (Number.isNaN(number)) return pricing;

  return number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .replace('.', ',');
};
