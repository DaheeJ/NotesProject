import Express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import { mongoUri } from './config'

const PORT = 5003
const app = Express()

app.use(bodyParser.json())
app.use(cors())

// code goes here

// WHEN we do GET to /notes, run this function

app.get('/notes', (req, res) => {
    const fakenotes = [
        'bryan should make dinner',
        'anubis is cute',
        'i like beer',
        'foo',
        'bar',
        'quux',
        'baz',
        'notes',
        'so many notes',
        'oh my god all these notes',
        'damn that is a lot of notes'
    ]
    // get ALL notes from database and send back
    return res.json(fakenotes)
})

app.get('/notes/:id', (req, res) => {
    // get note by id from database and send back
    return res.send('code is hard')
})

app.delete('/notes/:id', (req,res) => {
    // delete note by id from database
    return res.send('deleted!')
})

app.post('/new', (req, res ) => {
    // save req.body to database and get id back
    // const { id } = db.save(req.body)
    return res.send('Your ID')
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})