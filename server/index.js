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


// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';


app.post('/users/authenticate', function(req, res) {
  let users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
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
  try {
    const result = Joi.validate(req.body, userSchema)
    if (result.error) {
      req.flash('error', 'Data entered is not valid. Please try again.')
      res.redirect('/users/register')
      return
    }

    const user = await User.findOne({ 'email': result.value.email })
    if (user) {
      req.flash('error', 'Email is already in use.')
      res.redirect('/users/register')
      return
    }

    const hash = await User.hashPassword(result.value.password)

    delete result.value.confirmationPassword
    result.value.password = hash

    const newUser = await new User(result.value)
    await newUser.save()

    req.flash('success', 'Registration successfully, go ahead and login.')
    res.redirect('/users/login')
  } catch(error) {
    next(error)
  }
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
