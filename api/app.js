const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

const port = process.env.PORT || 5000;

router.get('/', (req, res) => {
  res.send('Wasit API v1');
});

app.listen(port, () => {
  console.log(`Wasit Server running on port ${  port}`);
});
