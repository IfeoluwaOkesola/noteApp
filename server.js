const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { dbConnection } = require('./config/connections');
const { routeManager } = require('./routes/rts');
const cors = require('cors');
dbConnection();
dotenv.config();

const app = express();
const port = process.env.PORT;

console.log(port);

//app.use(cors()); // Enable CORS for all routes

// Or configure specific origins
app.use(
  cors({
    origin: ['https://your-swagger-ui-url.com', 'https://my-note.onrender.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Include credentials like cookies, if needed
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routeManager);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
