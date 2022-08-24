const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const feedbackRoutes = require('./routes/feedback');
const keys = require('./config/keys');
const app = express();

function isSecure(req) {
    if (req.headers['x-forwarded-proto']) {
      return req.headers['x-forwarded-proto'] === 'https';
    }
    return req.secure;
};

mongoose.connect(
    keys.mongoURI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
}).then(() => console.log('Mongo DB connected'))
.catch(error => console.log(error));

app.use(require('morgan')('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use((req, res, next) => {
    if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test' && !isSecure(req)) {
      res.redirect(301, `https://${req.headers.host}${req.url}`);
    } else {
      next();
    }
});
app.use('/api/feedback', feedbackRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/client'));

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname, 'client', 'dist', 'client', 'index.html'
            )
        );
    });
}

module.exports = app;