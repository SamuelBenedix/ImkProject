export const formatNumber = (number, prefix) => {
  if (!prefix) {
    prefix = 'Rp. ';
  }
  if (number !== undefined && number > 0) {
    let price = number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return prefix + price;
  }
  if (number === undefined) {
    return prefix + 0;
  }
  return number;
};
