const express = require('express');
const router = express.Router();
// https://expressjs.com/es/guide/routing.html

const controller = require('../controllers/usersController');

const { auth, guest } = require('../middlewares/authMiddleware');

// BREAD: Respond to http://localhost:5000/users
// BROWSE - See all
router.get('/', controller.browse);
// EDIT - Edit one
router.put('/:id', controller.edit);
// CREATE - Add one
router.post('/', controller.create);
// DELETE - Delete one
router.delete('/', controller.delete);
// SEARCH - Find
router.get('/search', controller.search);
// Login Page (Form to login)
router.get('/login', guest, controller.login);
// Login Process
router.post('/login', controller.loginProcess);
// Profile (view)
router.get('/profile', auth, controller.profile);
// Logout process
router.post('/logout', controller.logout);
// READ - See one
router.get('/:id', controller.read);

module.exports = router;
