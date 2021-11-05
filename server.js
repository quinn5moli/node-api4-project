require('dotenv').config()

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const users = [
    {
        id: 1,
        username: "sherlock",
        password: "holmes17"
    },
    {
        id: 2,
        username: "watson",
        password: "sidekick"
    },
]

const newUser = {
    id: 3,
    username: "johndoe",
    password: "janedoe"
}

const server = express();

server.use(express.json())
server.use(cors())
server.use(helmet())


server.get('/api/users', (req, res) => {
    res.json(users)
})

server.post('/api/register', (req, res) => {
    res.json(req.body)
    console.log("hello")
})

server.post('/api/login', (req, res) => {
    if(req.body.username === "johndoe" && req.body.password === "janedoe") {

        res.json({messsage: "Welcome!"})

    } else {
        res.json({message: "try again"})
    }
})

server.use('*', (req, res) => {
    res.json({
        message: "magic!"
    })
})

module.exports = server 