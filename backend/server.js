const express = require("express");
const sequelize = require('./DB');
const noteroutes = require('./routes/note_routes');
const User = require('./models/User');
const Note = require("./models/Note");
const authroutes = require('./routes/auth_routes');

// Define associations
User.hasMany(Note, { foreignKey: 'userId', onDelete: 'CASCADE' });
Note.belongsTo(User, { foreignKey: 'userId' });

async function main(){
await sequelize.sync({alter:true});
console.log("Database synced with Notes and User table");








}

main();



const app = express();
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth",authroutes);
app.use("/notes",noteroutes);
const PORT = 5000;


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
