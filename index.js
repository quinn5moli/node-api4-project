require('dotenv').config();
const server = require('./server');
const colors = require('colors');


colors.enable();

const port = process.env.PORT || 4040;

server.use(express.json())


server.listen(port, () => {
    console.log(`\n**server is running on port ${port}**`
    .rainbow
    )
});