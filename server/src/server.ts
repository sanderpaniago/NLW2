import express from 'express'

const app = express();

app.use(express.json())

app.post('/user', (req, res) => {

    console.log(req.body)
    const users = [
        { nome: 'Diego', age: 25 },
        { nome: 'Sander', age: 19 }
    ]

    return res.json(users)
})

app.listen(3333)