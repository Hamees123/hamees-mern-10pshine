const express = require("express");
const sequelize = require('./DB');

async function main(){
await sequelize.sync({force:true});
console.log("Database synced with Notes and User table");


}

main();

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
