import express from "express";
import { CreateNotes, deleteNotes, getAllNotes, UpdateNotes,getThisNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getThisNote);
router.post("/", CreateNotes);
router.put("/:id", UpdateNotes); 
router.delete("/:id", deleteNotes);

export default router;
