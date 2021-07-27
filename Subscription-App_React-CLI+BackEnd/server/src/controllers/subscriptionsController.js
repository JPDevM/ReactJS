// ------------------------------- //
// Node.JS CONTROLLER subscription //
// ------------------------------- //

// Import models into controller.
// A the destructuring, using the table name in the model.
const { subscription } = require('../database/models');

// Helpers Functions
const { setPaymentDates } = require('../helperFn/calculateDate');

// Developer dependencies
const chalk = require('chalk');
const log = console.log;

module.exports = {
  // BROWSE --> See all. ('.../')
  browse: async (request, response) => {
    try {
      const allSubscription = await subscription.findAll({
        include: ['color'],
      });

      let finalSubscriptions = [];
      // Success
      // Add Prev, Next dates.
      for (const oneSubscription of allSubscription) {
        let subscriptionEdited = oneSubscription.dataValues; // Inmutable objet from sequelize. Need a copy.
        let { firstPayment, recurrency, longDate } = subscriptionEdited;
        // let recurrency = subscriptionEdited.recurrency;
        // let longDate = subscriptionEdited.longDate;

        subscriptionEdited.allDates = firstPayment
          ? await setPaymentDates(firstPayment, recurrency, longDate)
          : null;

        // subscriptionEdited.nextPaymentDates = firstPayment
        //   ? setPaymentDates(firstPayment, recurrency, longDate)
        //   : null;
        // subscriptionEdited.previousPaymentDates = longDate
        //   ? setPaymentDates(firstPayment, recurrency, longDate, 'prev')
        //   : null;

        finalSubscriptions = [...finalSubscriptions, subscriptionEdited];
      }

      return response.json(finalSubscriptions);
      // return response.json({
      //   metadata: {
      //     status: 200,
      //     message: 'Success',
      //   },
      //   data: finalSubscriptions,
      // });
    } catch (error) {
      // Fail
      return response.status(500).json({
        metadata: {
          status: 500,
          message: 'Could not list from database.',
          reason: error,
        },
      });
    }
  },

  // EDIT - Edit one ('.../:id')
  edit: async (request, response) => {
    let dataToUpdate = {
      isActive: request.body.isActive === 'Si' ? 1 : 0,
      isPopular: request.body.isPopular === 'Si' ? 1 : 0,
      name: request.body.name,
      logo: request.body.logo,
      description: request.body.description,
      price: request.body.price,
      firstPayment: request.body.firstPayment,
      recurrency: request.body.recurrency,
      longDate: request.body.longDate,
      notification: request.body.notification,
      currency: request.body.currency,
      style: request.body.style,
      userId: request.body.userId,
      colorId: request.body.colorId,
    };

    // Edit in db.
    const oneSubscription = await subscription.update(dataToUpdate, {
      where: { id: request.params.id },
    });
    // Sucess: edit in db.
    if (oneSubscription[0] === 1) {
      const subscriptionUpdated = await subscription.findByPk(
        request.params.id
      );
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: subscriptionUpdated,
      });
    }
    // Fail
    return response.status(500).json({
      metadata: {
        status: 500,
        message: 'Could not connect with data base.',
        reason: error,
      },
    });
  },

  // CREATE - Add one ('.../')
  create: (request, response) => {
    let dataToSave = {
      // Use variable names from the db.
      urlPath: request.body.urlPath, // Constancy in the db: the last argument of the body (urlPath) is the name = "urlPath" tag of the front form.
      description: request.body.description,
      userId: request.body.userId,
      isActive: request.body.active === 'si' ? 1 : 0, // INTEGER,
      isPopular: request.body.isPopular === 'si' ? 1 : 0, // INTEGER,
      name: request.body.name, // STRING,
      logoIcon: request.body.logoIcon, // STRING,
      logo: request.body.logo, // STRING,
      description: request.body.description, // STRING,
      price: request.body.price, // DECIMAL(10, 2),
      firstPayment: request.body.firstPayment, // DATE(),
      recurrency: request.body.recurrency, // STRING,
      longDate: request.body.longDate, // DATE(),
      notification: request.body.notification, //{
      currency: request.body.currencycurrency, // STRING,
      style: request.body.style, // STRING,
      userId: request.body.userId, // INTERGER,
      colorId: request.body.colorId, // INTEGER,
    };

    subscription
      .create(dataToSave)
      // Success message.
      .then((data) => {
        return response.send({
          status: 200,
          message: 'done',
          data: data,
        });
      })
      // Error message. Optional; when not saved in the db.
      .catch((error) => {
        return response.status(504).send({
          status: 504,
          message: 'Imposible guardar en la DB.',
          error: error,
        });
      });
  },

  // DELETE --> Delete one ('.../:id')
  delete: (request, response) => {
    subscription
      .update({ where: { id: request.params.id } })
      .then((subscription) => {
        // Success message.
        return response.json({
          metadata: {
            status: 200,
            message: 'Success',
          },
          data: subscription,
        });
      });
  },

  // SEARCH - Find ('.../search')
  search: (request, response) => {
    console.log(request.query);
    let token = Number(request.query.token);
    let word = request.query.name;

    if (!token || token !== 123456) {
      return response.status(500).json({
        status: 500,
        message: 'Bad request',
        reason: 'Token missmatch',
      });
    }

    return response.json({
      endPoint: 'Search',
      word,
      token,
    });
  },

  // READ --> See one ('.../:id')
  read: async (request, response) => {
    try {
      const oneSubscription = await subscription.findOne({
        where: { id: request.params.id },
        include: ['color'],
      });
      // Success message.
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: oneSubscription,
      });
    } catch (error) {
      // Fail
      return response.status(500).json({
        metadata: {
          status: 500,
          message: 'Could not list from database.',
          reason: error,
        },
      });
    }
  },

  // Active, order by date desc.

  active: async (request, response) => {
    try {
      const activeSubscription = await subscription.findAll({
        where: {
          isActive: '1', // Filter by active
        },
        order: [
          ['firstPayment', 'ASC'], // Sorts by firstPayment in ascending order
        ],
        include: ['color'],
      });
      // Success
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: activeSubscription,
      });
    } catch (error) {
      // Fail
      return response.status(500).json({
        metadata: {
          status: 500,
          message: 'Could not list from database.',
          reason: error,
        },
      });
    }
  },

  // inActive.
  inactive: async (request, response) => {
    try {
      const inActiveSubscription = await subscription.findAll({
        where: {
          isActive: '0', // Filter by active
        },
        include: ['color'],
      });
      // Success
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: inActiveSubscription,
      });
    } catch (error) {
      // Fail
      return response.status(500).json({
        metadata: {
          status: 500,
          message: 'Could not list from database.',
          reason: error,
        },
      });
    }
  },

  // Popular
  popular: async (request, response) => {
    try {
      const popularSubscription = await subscription.findAll({
        where: {
          isPopular: '1', // Filter by popular
        },
        include: ['color'],
      });
      // Success
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: popularSubscription,
      });
    } catch (error) {
      // Fail
      return response.status(500).json({
        metadata: {
          status: 500,
          message: 'Could not list from database.',
          reason: error,
        },
      });
    }
  },
};
