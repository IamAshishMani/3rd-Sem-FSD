import http from 'http';
import { createReadStream } from 'fs'; 
const server = http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET") {
        res.end("<h1>Product details</h1>");
    }
    
    else{
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(3000, () => console.log("Prg10 is running....."));