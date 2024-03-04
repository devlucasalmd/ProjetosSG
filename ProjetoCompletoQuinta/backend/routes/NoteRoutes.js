const router = require('express').Router()
const NotesController = require("../controllers/NoteController")

router
    .get('/',NotesController.getAll)
    .put('/editNote/:id',NotesController.editNote)
    .delete('/deleteNote/:id',NotesController.deleteNote)
    .post('/createNote',NotesController.createNote)

module.exports = router;