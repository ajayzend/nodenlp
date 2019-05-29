const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require('http').Server(app);
const config = require('./config/config');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev')); // it's log all the requests on the console
const api = require('./app/routes/api')(app, express);

app.use('/api', api);

app.get('*', (req, res) => {
  res.send('Remaining request process');
});

http.listen(config.server.port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Runnging on port: ${config.server.port}`);
  }
});
