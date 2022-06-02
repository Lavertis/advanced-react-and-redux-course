const Authentication = require("./controller/authentication");
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

module.exports = function (app) {
    app.get('/', requireAuth, function (req, res) {
        res.send('Hello World!');
    });
    app.post('/signin', requireSignIn, Authentication.signIn);
    app.post('/signup', Authentication.signUp)
}