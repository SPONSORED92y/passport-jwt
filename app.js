const express = require('express');
require('./passport');
const passport = require('passport');
const app = express();
const auth = require('./routes/auth');
const user = require('./routes/user');
app.use('/auth', auth);
app.use('/user', passport.authenticate('jwt', {session: false}), user);

app.listen(5000, () => console.log("server start on 5000"));