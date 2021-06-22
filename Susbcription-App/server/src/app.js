// Server on http://localhost:5000/
// Packages
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const methodOverride = require('method-override'); // To make PUT requests in Express.
const session = require('express-session');
const path = require('path');

require('dotenv').config(); // enviroment variables .env

// Initiate app
const app = express();
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  // Welcome menssaje
  console.log(
    `Hi ${process.env.USER_NAME}, have a nice day! the server is now live in http://${process.env.APP_HOST}:${PORT}`
  );

}); // Port

app.use(cors()); // Enable All CORS Requests.

// Public files folder setup
const publicFolder = express.static(path.resolve(__dirname, '../public/'));
app.use(publicFolder);

// Session
app.use(
  session({
    secret: 'a random word',
    resave: false,
    saveUninitialized: true,
  })
);

// Middlewares
// urlencoded and json are needed for POST and PUT requests to send data (objects) to the server that is included in the body (request.body).
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// Entities and statics routes
const staticRouter = require('./routes/staticRouter');
app.use('/', staticRouter);

const subscriptionsRouter = require('./routes/subscriptionsRouter');
app.use('/subscriptions', subscriptionsRouter);

const promotionsRouter = require('./routes/promotionsRouter');
app.use('/promotions', promotionsRouter);

const usersRouter = require('./routes/usersRouter');
app.use('/users', usersRouter);

app.get('*', function (request, response) {
  // 404 Not Found
  response.send('404 - Not found');
});