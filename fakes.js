const customers = [
  {
    id: 1234,
    name: 'Lola'
  }, {
    id: 2345,
    name: 'Gary'
  }];

const payments = [
  {
    id: 678,
    customer: 1234,
    sum: 1000
  }, {
    id: 697,
    customer: 1234,
    sum: 3012
  }];

const stats = [
  {
    name: 'Lola', sum: 4012
  }, {
    name: 'Gary', sum: 0
  }];

const stats_pdf = 'stats formatted to pdf';

module.exports = {
  customers,
  payments,
  stats,
  stats_pdf
};
