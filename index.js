const app = require('./app');
const port = process.env.PORT || 8081;

function isSecure(req) {
    if (req.headers['x-forwarded-proto']) {
      return req.headers['x-forwarded-proto'] === 'https';
    }
    return req.secure;
};

app.use((req, res, next) => {
    debugger;
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test' && !isSecure(req)) {
      res.redirect(301, `https://${req.headers.host}${req.url}`);
    } else {
      next();
    }
});

app.listen(port, () => console.log(`Server has been started on ${port}`));