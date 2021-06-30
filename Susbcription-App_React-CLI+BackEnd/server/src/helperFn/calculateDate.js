// ------------------------------- //
// Node.JS Helper calculateDate    //
// ------------------------------- //
var moment = require('moment'); // https://momentjs.com/docs/
require('moment-recur'); // https://github.com/c-trimm/moment-recur
module.exports = {
  // Output:
  // nextPaymentDates[n] ['July 12, 2021','June 12, 2021',...,]
  // previousPaymentDates[n] ['July 12, 2021','June 12, 2021',...,]

  nextPaymentDates: (starDate, recurrencyFromDB, endDate, count) => {
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
        var recurrence = moment(starDate).recur(endDate).every(3).days();
        break;

      case 'yearly':
        var recurrence = moment(starDate).recur(endDate).every(3).days();
        break;

      default:
        // Create a recurrence
        var recurrence = {};
        recurrence.save();
    }
    const date = recurrence.next(count, moment.defaultFormat);
    return date;
  },

  previousPaymentDates: (starDate, recurrencyFromDB, endDate, count) => {
    // Configs
    moment.defaultFormat = 'DD MMM';
    moment.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
    // Setters
    switch (recurrencyFromDB) {
      // Create a recurrence
      case 'monthly':
        var recurrence = moment(starDate).recur(endDate).every(1).days(); // .months() --> don't work
        break;

      case 'bimonthly':
        var recurrence = moment(starDate).recur(endDate).every(2).days(); // .months() --> don't work
        break;

      case 'weekly':
        var recurrence = moment(starDate).recur(endDate).every(1).weeks();
        break;

      case 'yearly':
        var recurrence = moment(starDate).recur(endDate).every(1).years();
        break;

      default:
        // Create a recurrence
        var recurrence = {};
        recurrence.save();
    }
    const date = recurrence.previous(count, moment.defaultFormat);
    return date;
  },
};
