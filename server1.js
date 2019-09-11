const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("server start");
    fs.readFile('server.html',(err,data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    });
}).listen(8080);

server.on("listening", () => {
    console.log("listening on 8080");
})
server.on("error", () => {
    console.log("error");
})