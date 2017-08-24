let express = require('express');
let app = express();

let port = 8080;

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    let notes = [
        {
            id: 1,
            text: 'First note'
        },
        {
            id: 2,
            text: 'Second note'
        }
    ];

    res.json(notes);
});

app.use((req, res) => {
    // Use res.sendFile, as it streams instead of reading the file into memory.
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log('Started on', port));