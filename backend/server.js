const express = require("express");
const sequelize = require('./DB');


const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
