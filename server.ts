import * as express from 'express'
import {notes} from "./data/notes";
import {Request, Response} from "express";

const app = express();

const port = 8080;

app.use(express.static('public'));

app.get('/api/notes', (req: Request, res: Response) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req: Request, res: Response) => {
    let note = notes.find((it) => it.id === parseInt(req.params.id));

    if (note) {
        res.json(note);
    } else {
        res.status(404).json({
            error: "Note ID not found"
        })
    }
});

app.use((req: Request, res: Response) => {
    // Use res.sendFile, as it streams instead of reading the file into memory.
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log('Started on', port));