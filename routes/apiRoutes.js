const router = require('express').Router();
const saveData = require('../db/saveData');

app.get('/notes', (req,res) => {
    saveData
    .retrieveNotes()
    .then(notes => res.json(note))
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
})

app.post('/notes', (req, res) => {
    saveData 
    .addNote(req.body)
    .then((note) => res.json(note))
    if (!validateNote(req.body)) {
        res.status(400).send
    } else {
        res.json(err);
    }

});


module.exports = router;