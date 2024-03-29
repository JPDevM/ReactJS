// -------------------------- //
// Node.JS RUTER subscription //
// -------------------------- //

const express = require('express');
const router = express.Router();
// https://expressjs.com/es/guide/routing.html

const controller = require('../controllers/subscriptionsController');

// BREAD: Respond to http://localhost:5000/subscriptions
// BROWSE - See all ('.../')
router.get('/', controller.browse);
// EDIT - Edit one ('.../:id')
router.patch('/:id', controller.edit);
// CREATE - Add one ('.../')
router.post('/', controller.create);
// DELETE - Delete one ('.../id')
router.delete('/:id', controller.delete);
// SEARCH - Find ('.../search')
router.get('/search', controller.search);

// Active, order by date desc. 
router.get('/active', controller.active);

// inActive. 
router.get('/inactive', controller.inactive);

// Popular
router.get('/popular', controller.popular);

// READ - See one ('.../:id')
// SIEMPRE AL FINAL PUES ES MUY GENÉRICO
router.get('/:id', controller.read);

module.exports = router;
