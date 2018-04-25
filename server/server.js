import Express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import shortid from 'shortid'
import { mongoUri } from './config'

const PORT = 5003
const app = Express()

app.use(bodyParser.json())
app.use(cors())

// code goes here

// WHEN we do GET to /notes, run this function
// { id: number, body: string }

let db = []
app.get('/notes', (req, res) => {
    // get ALL notes from database and send back
    return res.json(db)
})

app.get('/notes/:id', (req, res) => {
    // get note by id from database and send back
    return res.json('code is hard')
})

app.delete('/notes/:id', (req,res) => {
    // delete note by id from database
    return res.send('deleted!')
})

app.post('/newnote', (req, res) => {
    const id = shortid()
    const body = req.body
    const newNote = { id, body }
    db.push(newNote)
    return res.json({ id })
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})