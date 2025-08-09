const express = require("express");
const router = express.Router();
const {
  createNote,
  readUserNotes,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/create", authMiddleware, createNote);

router.get("/read", authMiddleware, readUserNotes);

router.put("/update/:id", authMiddleware, updateNote);

router.delete("/delete/:id", authMiddleware, deleteNote);

module.exports = router;
