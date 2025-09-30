const express = require("express");
const sequelize = require('./DB');
const noteroutes = require('./routes/note_routes');
const User = require('./models/User');
const Note = require("./models/Note");
async function main(){
await sequelize.sync({force:true});
console.log("Database synced with Notes and User table");


const user = await User.create({
  
  username : "haris",
  email : "h@gmail.com",
  password : "haris123"



});

const note = await Note.create({
  
  title : "web",
  content : "web content",

});

console.log(user.toJSON());
console.log(note.toJSON());





}

main();



const app = express();
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/notes",noteroutes);
const PORT = 5000;


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
