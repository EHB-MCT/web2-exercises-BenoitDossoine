const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs/promises');

const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.status(300).redirect('/info.html');
})

app.get('/api/boardgames', async (req, res) => {
    try {
        let data = await fs.readFile('public/boardgames.json');
        res.status(200).send(JSON.parse(data));
    } catch (error) {
        res.status(500).send("File not accessible. Try again later");
    }
})

app.get('/api/boardgame', async (req, res) => {

    try {
        let data = JSON.parse(await fs.readFile('public/boardgames.json'));
        let bg = data[req.query.id];

        if (bg) {
            res.status(200).send(bg);
            return;
        } else {
            res.status(400).send(`Boardgame with id ${req.query.id} could not be found!`);
        }


    } catch (error) {
        res.status(500).send("File not accessible. Try again later");
    }
    res.send('everything okay');
})

app.post('/api/saveBoardgame', async (req, res) => {
    // console.log(req.body.name);
    if (!req.body.id || !req.body.name || !req.body.genre || !req.body.mechanisms || !req.body.description) {
        res.status(400).send('Bad request: missing id, name, genre, mechisms or description');
        return;
    }

    try {

        let boardgames = await fs.readFile('public/boardgames.json');
        boardgames = JSON.parse(boardgames);

        boardgames[req.body.id] = {
            name: req.body.name,
            genre: req.body.genre,
            mechanisms: req.body.mechanisms,
            description: req.body.description
        };

        await fs.writeFile('public/boardgames.json', JSON.stringify(boardgames));
        res.status(201).send(`Boardgame with id ${req.body.id} added succesfully`);

    } catch (error) {

        res.status(500).send("An error has occured!");
    }
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});