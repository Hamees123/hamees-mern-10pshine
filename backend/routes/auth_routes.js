const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth_controller");
const authmidd = require("../middleware/auth_middleware");
const {updateuser} = require("../controllers/auth_controller");
router.post("/register", register);
router.post("/login", login);
router.put("/updateuser/:id",authmidd,updateuser)



module.exports = router;
