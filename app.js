const express = require('express');
const mongoose = require('mongoose');
const routerUser = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/', routerUser);
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
