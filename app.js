const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const feedbackRoutes = require('./routes/feedback');
const keys = require('./config/keys');
const app = express();

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