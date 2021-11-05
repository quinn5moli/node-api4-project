require('dotenv').config()

const express = require('express');
const colors = require('colors');

const server = express();
colors.enable();

const port = process.env.PORT || 4040;

server.use(express.json())


server.listen(port, () => {
    console.log(`\n**server is running on port ${port}**`
    .rainbow
    )
});