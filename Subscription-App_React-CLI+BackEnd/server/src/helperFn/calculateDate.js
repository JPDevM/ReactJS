// ------------------------------- //
// Node.JS Helper calculateDate    //
// ------------------------------- //
var moment = require('moment'); // https://momentjs.com/docs/
require('moment-recur'); // https://github.com/c-trimm/moment-recur

// Developer dependencies
const chalk = require('chalk');
const log = console.log;

const x = async function (a, b) {
  var recurrence = await moment().recur(a, b).every(1).month();
  const allDates = await recurrence.all('DD MMM');
  console.log(a, b);
  console.log(allDates);
  return;
}

module.exports = {
  // Input:
  // > setPaymentDates(starDate, recurrencyFromDB, endDate, type = 'next', count = 1)
  // Output:
  // > nextPaymentDates[n] ['July 12, 2021','June 12, 2021',...,]
  // > previousPaymentDates[n] ['July 12, 2021','June 12, 2021',...,]

  setPaymentDates: async (
    startDate,
    recurrencyFromDB,
    endDate,
    type = 'next',
    count = 1
  ) => {
    if (startDate && endDate) {
      // Configs
      moment.defaultFormat = 'DD MMM YYYY';
      moment.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
      
      let startDateFinal = moment(startDate).format(moment.defaultFormat);
      let endDateFinal = moment(endDate).format(moment.defaultFormat);
     
      // Setters
      switch (recurrencyFromDB) {
        // Create a recurrence
        case 'monthly':
          var recurrence = await moment().recur(startDateFinal, endDateFinal).every(1).month();
          break;

        case 'bimonthly':
          var recurrence = moment(starDate).recur(endDate).every(2).months();
          break;

        case 'weekly':
          var recurrence = moment(starDate).recur(endDate).every(1).weeks();
          break;

        case 'yearly':
          var recurrence = moment(starDate).recur(endDate).every(1).years();
          break;
      }

      const allDates = await recurrence.all('DD MMM');
      // const date =
      //   type === 'next'
      //     ? recurrence.next(count, moment.defaultFormat)
      //     : recurrence.previous(count, moment.defaultFormat);
      // // log(date);
      return allDates;
    }

    // log(
    //   chalk.bgRed('the function setPaymentDates need date.') +
    //   chalk.red('File: server/src/helperFn/calculateDate.js')
    // );

    return null;
  },
};
