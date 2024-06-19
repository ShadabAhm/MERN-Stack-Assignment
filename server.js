const express = require('express');
const { default: axios } = require('axios');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 5000;

require('./config/db/connect');
require('./routes')(app)



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});