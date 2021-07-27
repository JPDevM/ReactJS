// Server on http://localhost:5000/
// Packages
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const session = require('express-session');
const path = require('path');
// Develop packages
const chalk = require('chalk');
const log = console.log;

require('dotenv').config({ path: './.env' }); // enviroment variables .env

// Initiate app

const app = express();
// Welcome menssaje
const USER = process.env.USER_NAME;
const PORT = process.env.APP_PORT || 3000;
const HOST = process.env.APP_HOST;
app.listen(
  PORT,
  log(
    `Hi ` +
      chalk.green(`${USER}`) +
      `, have a nice day! the server is now live in ` +
      chalk.green(`http://${HOST}:${PORT}/`)
  )
);

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

const subscriptionsRouter = require('./routes/subscriptionsRouter');
app.use('/subscriptions', subscriptionsRouter);

const promotionsRouter = require('./routes/promotionsRouter');
app.use('/promotions', promotionsRouter);

const usersRouter = require('./routes/usersRouter');
app.use('/users', usersRouter);

app.get('*', function (request, response) {
  // 404 Not Found
  response.status(404).json({
    code: 404,
    message: 'Bad request, end point not found'
  });
});
