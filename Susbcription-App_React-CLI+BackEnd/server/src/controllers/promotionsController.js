// ------------------------------- //
// Node.JS CONTROLLER promotion    //
// ------------------------------- //

// Import models into controller.
// A the destructuring, using the table name in the model.
const { promotion } = require('../database/models');

// Helpers Functions

module.exports = {
  // BROWSE --> See all. ('.../')
  browse: async (request, response) => {
    try {
      const allPromotions = await promotion.findAll();
      // Success
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: allPromotions,
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
    let dataToUpdate = {
      isActive: request.bodyisActive === 'Si' ? 1 : 0,
      type: request.bodytype,
      startDate: request.bodystartDate,
      endDate: request.bodyendDate,
      urlPath: request.bodyurlPath,
      description: request.bodydescription,
      userId: request.bodyuserId,
    };

    // Edit in db.
    const onePromotios = await promotion.update(dataToUpdate, {
      where: { id: request.params.id },
    });
    // Sucess: edit in db.
    if (onePromotios[0] === 1) {
      const promotionUpdated = await promotion.findByPk(request.params.id);
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: promotionUpdated,
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
    let dataToUpdate = {
      isActive: request.bodyisActive === 'Si' ? 1 : 0,
      type: request.bodytype,
      startDate: request.bodystartDate,
      endDate: request.bodyendDate,
      urlPath: request.bodyurlPath,
      description: request.bodydescription,
      userId: request.bodyuserId,
    };

    promotion
      .create(dataToUpdate)
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
    promotion.update({ where: { id: request.params.id } }).then((promotion) => {
      // Success message.
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: promotion,
      });
    });
  },

  // SEARCH - Find ('.../search')
  search: (request, response) => {
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
      const onePromotion = await promotion.findOne({
        where: { id: request.params.id },
      });
      // Success message.
      return response.json({
        metadata: {
          status: 200,
          message: 'Success',
        },
        data: onePromotion,
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