var moment = require('moment');
require('moment-recur'); // borrar, solo para el test

module.exports = {
  nextPaymentDate: (firstPayment, recurrency, longDate) => {
    //  Calculate the next subscription payment date.
    var thisDay = moment().format('D');
    var thisMonth = moment().format('M');
    var thisYear = moment().format('Y');

		var recurrence = moment()
      .recur({
        start: firstPayment,
        end: longDate,
      })
      .every(1)
      .months(); // every(1).years(); every(2).months(); every(1).weeks();

    var allDates = recurrence.all('LL');

    console.log(JSON.stringify(allDates));


    switch (recurrency) {
      case 'monthly':
        var paymentDay = moment(firstPayment).format('D'); // 12
        if (paymentDay > thisDay) {
          var paymentMonth = moment(thisMonth).add(1, 'M');
        }
        var paymentMonth = thisMonth;
        var paymentYear = thisYear;

        var nextPaymentDate = moment([
          paymentYear,
          paymentMonth,
          paymentDay,
        ]).format('D, MMM, YYYY');
        break;
      case 'bimonthly':
        var paymentDay = moment(firstPayment).format('D');
        if (paymentDay > thisDay) {
          var paymentMonth = moment(thisMonth).add(2, 'M');
        }
        var paymentMonth = moment(thisMonth).add(1, 'M');
        var paymentYear = thisYear;

        var nextPaymentDate = moment([
          paymentYear,
          paymentMonth,
          paymentDay,
        ]).format('D, MMM, YYYY');
        break;
      case 'weekly':
        var paymentDate = 'switch weekly';
        break;
      case 'yearly':
        var paymentDate = 'switch yearly';
        break;
      default:
        var paymentDate = 'switch default';
    }

    // Una vez resuelto los casos y obtener nextPaymentDate, ver que no esten vencido con longDate

    return nextPaymentDate;
    // let paymentDate = firstPayment - longDate;
    // // Output format: August 24, 1970
    // return moment(paymentDate).format('LL');
  },

  nextPaymentDateRelative: (firstPayment, recurrency, longDate) => {
    //  Calculate the next subscription payment date.
    return console.log(longDate);
    // Output format: 26 June 2021
    return firstPayment - longDate;
  },
};
