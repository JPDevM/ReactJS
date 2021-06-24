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
  edit: (request, response) => {
    return response.json({
      endPoint: 'Edit',
    });
  },

  // CREATE - Add one ('.../')
  add: (request, response) => {
    return response.json({
      endPoint: 'Add',
    });
  },

  // DELETE --> Delete one ('.../:id')
  delete: (request, response) => {
    return response.json({
      endPoint: 'Delete',
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
  read: (request, response) => {
    return response.json({
      endPoint: 'Read',
    });
  },
};
