const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('./database');
require('dotenv').config();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.set('port', 8000);

app.use('/salao', require('./src/routes/salao.routes'));

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});