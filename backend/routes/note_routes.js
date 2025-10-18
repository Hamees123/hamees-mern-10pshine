import express from "express";
import authmiddleware from "../middleware/auth_middleware.js";
import * as noteController from "../controllers/notes_controller.js";

const router = express.Router();




router.post("/",authmiddleware,noteController.createNote);
router.get("/",authmiddleware, noteController.getNotes);
router.put("/:id",authmiddleware ,noteController.updateNote);
router.delete("/:id", authmiddleware,noteController.deleteNote);

export default  router;
