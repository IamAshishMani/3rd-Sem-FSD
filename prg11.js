import http from 'http';

const server = http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET") {
        res.end('home page');

    } else if(req.url === "/product" && req.method === "GET") {
        const products = [
            { id: 1, name: 'mobile', price: 10000 },
            { id: 2, name: 'phone cover', price: 200 },
            { id: 3, name: 'laptop', price: 60000 }
        ];
        res.end(JSON.stringify(products));
    }

    else if(req.url === "/product" && req.method === "POST") {
        res.end('add product');
    }

    else if(req.url === "/product" && req.method === "PUT") {
        res.end('update product');
    }

    else if(req.url === "/product" && req.method === "DELETE") {
        res.end('delete product');
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});