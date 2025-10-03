const Note = require("../models/Note");
const logger = require('../utils/logger');


async function createNote(req, res) {
    logger.info({ userId: req.user.id, body: req.body }, 'Attempting to create a new note');

  try {
 
    const { title, content } = req.body;
    const note = await Note.create({ title, content, userId: req.user.id });
        logger.info({ noteId: note.id }, 'Note created successfully');

    res.status(201).json(note);
  } catch (error) {
        logger.error({ err: error, userId: req.user.id }, 'Failed to create note');

    res.status(500).json({ error: "Failed to create note", details: error.message });
  }
}


async function getNotes(req, res) {
    logger.info({ userId: req.user.id }, 'Fetching notes for user');

  try {
    const { userId } = req.query; // optional filter
    const notes = await Note.findAll({
      where: userId ? { userId } : {},
      where: { userId: req.user.id },
    });
        logger.info({ userId: req.user.id, count: notes.length }, 'Fetched notes successfully');

    res.json(notes);
  } catch (error) {
        logger.error({ err: error, userId: req.user.id }, 'Failed to fetch notes');

    res.status(500).json({ error: "Failed to fetch notes", details: error.message });
  }
}


async function updateNote(req, res) {
    logger.info({ userId: req.user.id, noteId: req.params.id, body: req.body }, 'Attempting to update note');

  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const note = await Note.findByPk(id);
    if (!note) return res.status(404).json({ error: "Note not found" });
  if (!note) {
      logger.warn({ userId: req.user.id, noteId: id }, 'Update failed: Note not found');
      return res.status(404).json({ error: "Note not found" });
    }
    // Ensure the note belongs to the authenticated user
    if (note.userId !== req.user.id) return res.status(403).json({ error: "Forbidden" });

  if (note.userId !== req.user.id) {
      logger.warn({ userId: req.user.id, noteId: id, ownerId: note.userId }, 'Update failed: Forbidden access');
      return res.status(403).json({ error: "Forbidden" });
    }

    note.title = title || note.title;
    note.content = content || note.content;
    await note.save();

        logger.info({ noteId: note.id }, 'Note updated successfully');


    res.json(note);
  } catch (error) {
        logger.error({ err: error, userId: req.user.id, noteId: req.params.id }, 'Failed to update note');

    res.status(500).json({ error: "Failed to update note", details: error.message });
  }
}

async function deleteNote(req, res) {
   logger.info({ userId: req.user.id, noteId: req.params.id }, 'Attempting to delete note');

  try {
    const { id } = req.params;

    const note = await Note.findByPk(id);
    if (!note) return res.status(404).json({ error: "Note not found" });

      if (!note) {
      logger.warn({ userId: req.user.id, noteId: id }, 'Delete failed: Note not found');
      return res.status(404).json({ error: "Note not found" });
    }
    // Ensure the note belongs to the authenticated user
    if (note.userId !== req.user.id) return res.status(403).json({ error: "Forbidden" });

    if (note.userId !== req.user.id) {
      logger.warn({ userId: req.user.id, noteId: id, ownerId: note.userId }, 'Delete failed: Forbidden access');
      return res.status(403).json({ error: "Forbidden" });
    }

    await note.destroy();
        logger.info({ noteId: id }, 'Note deleted successfully');

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
        logger.error({ err: error, userId: req.user.id, noteId: req.params.id }, 'Failed to delete note');

    res.status(500).json({ error: "Failed to delete note", details: error.message });
  }
}

module.exports = { createNote, getNotes, updateNote, deleteNote };
