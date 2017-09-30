let express = require('express');
let app = express();
let notes = require('./data/notes');

let port = 8080;

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    let note = notes.find((it) => it.id === parseInt(req.params.id));

    if (note) {
        res.json(note);
    } else {
        res.status(404).json({
            error: "Note ID not found"
        })
    }
});

app.use((req, res) => {
    // Use res.sendFile, as it streams instead of reading the file into memory.
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log('Started on', port));