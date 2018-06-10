const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
require('dotenv').config();
const AWS = require('./Controllers/AWSController')

const app = express();
const port = 3005;


massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
});

app.use(bodyParser.json());

// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         saveUninitialized: true,
//         resave: false
//     })
// )
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//     new Auth0Strategy(
//         {
//             domain: process.env.AUTH_DOMAIN,
//             clientID: process.env.AUTH_CLIENT_ID,
//             clientSecret: process.env.AUTH_CLIENT_SECRET,
//             callbackURL: process.env.AUTH_CALLBACK,
//             scope: 'openid profile email'
//         },
//         (accessToken, refreshToken, extraParams, profile, done) => {
//             const db = app.get('db');
//             db.get_user_by_auth_id({ auth_id: profile.id }).then(results => {
//                 let user = results[0];


//                 if (user) {
//                     return done(null, user);
//                 } else {
//                     let userObj = {
//                         name: profile.displayName,
//                         auth_id: profile.id,
//                         picture: profile.picture,
//                         email: profile.emails
//                     };
//                     db.create_user(userObj).then(results => {
//                         let user = results[0];
//                         return done(null, user);
//                     });
//                 }

//             });
//         }
//     )
// );

// passport.serializeUser((user,done) => {
//     return done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     const db = app.get('db');
//         db.get_user_by_id({id}).then(results => {
//         let user = results[0];
//         return done(null,user);
//     });
// });

// AWS ENDPOINT
app.post('/api/aws', AWS.sign)

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// SERVER LISTEN

app.listen(port, () => {
    console.log('Listening on port ', port);
});
