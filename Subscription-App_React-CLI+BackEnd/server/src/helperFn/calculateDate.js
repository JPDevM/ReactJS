// ------------------------------- //
// Node.JS Helper calculateDate    //
// ------------------------------- //
var moment = require('moment'); // https://momentjs.com/docs/
require('moment-recur'); // https://github.com/c-trimm/moment-recur

// Developer dependencies
const chalk = require('chalk');
const log = console.log;

module.exports = {
  // Input:
  // > setPaymentDates(starDate, recurrencyFromDB, endDate, type = 'next', count = 1)
  // Output:
  // > nextPaymentDates[n] ['July 12, 2021','June 12, 2021',...,]
  // > previousPaymentDates[n] ['July 12, 2021','June 12, 2021',...,]

  setPaymentDates: (
    starDate,
    recurrencyFromDB,
    endDate,
    type = 'next',
    count = 1
  ) => {
    if (starDate && endDate) {
      // Configs
      moment.defaultFormat = 'DD MMM';
      moment.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
      // Setters
      switch (recurrencyFromDB) {
        // Create a recurrence
        case 'monthly':
          var recurrence = moment(starDate).recur(endDate).every(3).days();
          break;

        case 'bimonthly':
          var recurrence = moment(starDate).recur(endDate).every(3).days();
          break;

        case 'weekly':
          var recurrence = moment(starDate).recur(endDate).every(1).weeks();
          break;

        case 'yearly':
          var recurrence = moment(starDate).recur(endDate).every(1).years();
          break;
      }
      const date =
        type === 'next'
          ? recurrence.next(count, moment.defaultFormat)
          : recurrence.previous(count, moment.defaultFormat);
      // log(date);
      return date;
    }

    log(
      chalk.bgRed('the function setPaymentDates need date.') +
        chalk.red('File: server/src/helperFn/calculateDate.js')
    );
    return null;
  },
};
