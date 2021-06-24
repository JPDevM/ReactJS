// ------------------------------- //
// Node.JS CONTROLLER subscription //
// ------------------------------- //

// Import models into controller.
// A the destructuring, using the table name in the model.
const { subscription } = require('../database/models');

// Helpers Functions
const calculateDate = require('../helperFn/calculateDate');

module.exports = {
  // BROWSE --> See all. ('.../')
  browse: async (request, response) => {
    try {
      const allSubscription = await subscription.findAll();
      // Success
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: allSubscription,
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

  // EDIT - Edit one ('.../:id')
  edit: async (request, response) => {
    const oneSubscription = await subscription.findOne({
      where: { id: request.params.id },
    });
    return response.send({ oneSubscription });
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
        return response.json(subscription);
      });
  },

  // SEARCH - Find ('.../search')
  search: (request, response) => {},

  // READ --> See one ('.../:id')
  read: async (request, response) => {
    try {
      const oneSubscription = await subscription.findOne({
        where: { id: request.params.id },
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
};
