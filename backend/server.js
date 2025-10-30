import express from "express";
import cors from "cors";
import sequelize from "./DB.js";
import noteroutes from "./routes/note_routes.js";
import authroutes from "./routes/auth_routes.js";
import User from "./models/User.js";
import Note from "./models/Note.js";

// Define associations
User.hasMany(Note, { foreignKey: 'userId', onDelete: 'CASCADE' });
Note.belongsTo(User, { foreignKey: 'userId' });

async function main(){
await sequelize.sync({alter:true});
console.log("Database synced with Notes and User table");








}

main();



const app = express();
app.use(cors()); // allow requests from frontend

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


export default app;