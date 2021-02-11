const http = require('http');
/*
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
*/
const port = 3000; 
const hostname = "localhost";

const server = http.createServer((req, res) => {
    console.log("A request is made");
});

server.listen(port, hostname, () => {
    console.log(`listening on port ${port} and server ${hostname}`);
});