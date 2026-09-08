import http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "application.json"});
    const product = {
        name: 'Mobile',
        price: 2500,
        discount: "10%",
        company: "Samsung"
    };
    // res.end(JSON.stringify(product));
})

server.listen(3000, () => console.log("Server is running..."));