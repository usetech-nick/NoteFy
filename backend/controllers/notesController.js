const Note = require("../models/Note");

// Create
const createNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }
    const note = await Note.create({
      title,
      content,
      tags,
      user: req.userId,
    });
    res.status(201).json(note);
  } catch (err) {
    return res.status(500).json({ message: "server error", err });
  }
};

// Read
const readUserNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    return res.status(500).json({ message: "server error", err });
  }
};

// Update
const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: " Note not found" });
    }

    if (note.user.toString() !== req.userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this note" });
    }

    if (req.body.title === "") {
      return res.status(400).json({ message: "Title cannot be empty" });
    }
    if (req.body.content === "") {
      return res.status(400).json({ message: "Content cannot be empty" });
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;
    if (req.body.tags !== undefined) note.tags = req.body.tags;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } catch (err) {
    return res.status(500).json({ message: "server error", err });
  }
};

// Delete

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.user.toString() !== req.userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this note" });
    }

    await note.deleteOne();
    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "server error", err });
  }
};

module.exports = {
  createNote,
  readUserNotes,
  updateNote,
  deleteNote,
};
