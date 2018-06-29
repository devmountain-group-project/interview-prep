const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const JasmineController = require('./Controllers/Jasmine/JasmineController');
const AWS = require('./Controllers/AWSController');
const fs = require('fs')
const FSC = require('./Controllers/FSController')
const ViewProblem = require('./Controllers/ViewProblem')
const GetProblems = require('./Controllers/GetProblems');
const AddProblem = require('./Controllers/AddProblem');
const GetSolved = require('./Controllers/GetSolved');
require('dotenv').config();
const path = require('path');


//MIDDLEWARE
const isAuthenticated = require('./middleware/isAuthenticated')

const app = express();
const port = 3005;


massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
});

app.use(bodyParser.json());
app.use(cors());



app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK,
      scope: "openid profile"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {

      const db = app.get('db');
      console.log(profile._json.name);
      db.get_user_by_auth_id({ auth_id: profile.id }).then(results => {
        let user = results[0];

        if (user) {
          return done(null, user)
        } else {
          let userObj = {
            username: profile.displayName,
            name: profile._json.name,
            auth_id: profile.id
          }

          db.create_user(userObj).then(results => {
            let user = results[0];
            return done(null, user)
          })
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const db = app.get('db');

  db.get_user_by_id({ id }).then(results => {
    let user = results[0];
    return done(null, user);
  });
});

jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});

//Auth0 Endpoints

app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/dashboard",
    failureRedirect: "http://localhost:3000/#/"
  })
);

app.get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect('http://localhost:3000/#/')
});

app.get("/auth/me", (req, res) => {
  if (req.isAuthenticated()) {
    console.log(44444444444, req.user);
    return res.send(req.user);
  } else {
    return res.status(404).send("user not authenticated");
  }
});

// AWS ENDPOINT
app.post('/api/aws', AWS.sign)


// JASMINE ENDPOINT
app.post('/api/runTest', JasmineController.runTest);

// FS ENDPOINTS
app.post('/api/writeFile', FSC.write)
app.delete('/api/deleteFile', FSC.delete)
app.post('/api/writeTestFile', FSC.writeTest)


//PROBLEM ENDPOINTS
app.get('/api/getProblem/:problem_id', ViewProblem.get)
app.get('/api/getProblems', GetProblems.get)
app.post('/api/addProblem', AddProblem.addProblem)
app.get('/api/getSolvedProblems/:user_id' ,GetSolved.get)

// SERVER LISTEN

app.listen(port, () => {
    console.log('Listening on port ', port);
});
