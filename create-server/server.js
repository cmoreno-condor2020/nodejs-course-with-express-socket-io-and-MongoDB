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
    res.setHeader('Content-Type', 'text/html');
    res.write('<body>');
    res.write('<h1>Welcome to ckmobile</h1>');
    res.write('<h3>this a test of node response</h3>');
    res.write('</body>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`listening on port ${port} and server ${hostname}`);
});