const express = require('express');
const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const helmet = require('helmet');
const path = require('path');

require('dotenv').config()


/**
 * Routers to endpoints
 */
const eventRouter = require('./routes/events')





/*
 * Set up app
 */
const app = express();

// enhance security with helmet
app.use(helmet());

// parse application/json content-type
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));


// Accept cross-origin requests from the frontend app
app.use(cors({ origin: "http://localhost:3000" }));


// Log HTTP requests
app.use(morgan('combined'));



/*
 * Auth0 Setup
 */
const authConfig = {
  domain: process.env.AUTH0_DOMAIN,
  audience: process.env.AUTH0_API_IDENTIFIER
};


// Define middleware that validates incoming bearer tokens
// using JWKS from auth0 domain
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});


// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});



/*
 * Route to endpoints
 */
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.use('/events', eventRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});



/**
 * Connect to local database
 */
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/' + process.env.APP_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error.bind(err));



/**
 * Start app
 */
app.listen(3001, () => console.log('API listening on 3001'));

