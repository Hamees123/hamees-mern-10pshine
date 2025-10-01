const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/auth_middleware");
const noteController = require("../controllers/notes_controller");
router.post("/",authmiddleware,noteController.createNote);
router.get("/",authmiddleware, noteController.getNotes);
router.put("/:id",authmiddleware ,noteController.updateNote);
router.delete("/:id", authmiddleware,noteController.deleteNote);

module.exports = router;
