/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const nanoid = require("nanoid");
const {User} = require("./models/user")
// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});
var users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];


// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';


app.post('/users/authenticate', function(req, res) {
  user = users[0]
  let responseJson = {
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    token: nanoid(48),
    ttl:1800000
  };
  res.send(responseJson);
})  
.post("/users/register",async (req, res, next) => {
  let responseJson = {
    success: true
  };
  res.send(responseJson)
})

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
