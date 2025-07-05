// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6789;

app.get('/', (req, res) => {
  res.send('Hello CI/CD 👋');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});