const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit_form', (req, res) => {
  console.log('Name:', req.body.name);
  console.log('Email:', req.body.email);
  res.send('Form data received');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
