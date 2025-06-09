const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', async (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/categories', require('./routes/categoryRoute'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
