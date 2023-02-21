const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { dbConnection } = require('./config/connections');
const { routeManager } = require('./routes/rts');
dbConnection();
dotenv.config();

const app = express();
const port = process.env.PORT;
console.log(port);
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routeManager);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
