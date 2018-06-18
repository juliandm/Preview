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
var bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});
var users = [];
var loggedIn = []

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/users/authenticate',async function(req, res) {
  const {email, password} = req.body
  let response = {}
  
  console.log(email, password, users)
  // Fake Search query
  user = users.find(el=>el.email === email)
  if (user) {
    const PW_MATCH = await new Promise((resolve, reject) => {
      bcrypt.compare(password, user.pw, function(err, res) {
        if (res && !err) resolve(res)
        else reject(err)
      });
    }).catch((e)=>{console.log(e)})
    if (PW_MATCH) {
      response = {
        id: user.id,
        email: user.email,
        token: nanoid(48),
        ttl:1800000
      };
    }
  }




  res.send(response)
})  
.post("/users/register",async (req, res, next) => {
  const {email, password} = req.body
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  // Fake Save DB
  users.push({"id": nanoid(10), "pw": hashedPassword, "email":email})

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
