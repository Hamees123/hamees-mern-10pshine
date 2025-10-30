
import express from "express";
import { register, login, updateuser } from "../controllers/auth_controller.js";
import authmidd from "../middleware/auth_middleware.js";

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.put("/updateuser/:id",authmidd,updateuser)



export default router;
