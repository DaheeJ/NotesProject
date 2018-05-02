import Express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import shortid from 'shortid'
import { mongoUri } from './config'

const PORT = 5003
const app = Express()

app.use(bodyParser.json())
app.use(cors())

// WHEN we do GET to /notes, run this function
// { id: number, body: string }

let db = [{ id: shortid(), body: 'one!' }, { id: shortid(), body: 'note two!' }]
app.get('/notes', (req, res) => {
    // get ALL notes from database and send back
    return res.json(db)
})

app.get('/notes/:id', (req, res) => {
    // get note by id from database and send back
    // [ { id: 1234, body: 'i am a note '} ]
    const id = req.params.id
    // notes    (note has an id that matches req.params.id)

//    // let note
//     for (let i = 0; i < db.length; i++) {
//         if (db[i].id === req.params.id) {
//             note = db[i]
//         }
//     }

// const beers = [ 'pilsner', 'brown nut ale', 'guiness', 'lager' ]
// const oneBeer = beers.find((beer) => beer === 'blue moon') // undefined
// const twoBeer = beers.find((beer) => beer === 'lager') // lager

    const note = db.find((n) => n.id === id)
    return res.json(note)
})

app.delete('/notes/:id', (req,res) => {
    // delete note by id from database
    db = db.filter((note) => note.id !== req.params.id)
    return res.send('deleted')
})

app.post('/newnote', (req, res) => {
    const id = shortid()
    const body = req.body.body
    const newNote = { id, body }
    db.push(newNote)
    console.log(db)
    return res.json({ id })
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})