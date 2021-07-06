// -------------------------- //
// Node.JS RUTER promotions   //
// -------------------------- //

const express = require('express');
const router = express.Router();
// https://expressjs.com/es/guide/routing.html

const controller = require('../controllers/promotionsController');

// BREAD: Respond to http://localhost:5000/promotions
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
// READ - See one ('.../:id')
router.get('/:id', controller.read);

module.exports = router;
