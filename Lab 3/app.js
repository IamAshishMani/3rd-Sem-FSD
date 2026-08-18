import http from 'http';

const server = http.createServer();
server.on('request', (req, res) => {
  res.write("Welcome to Amazon Shopping 🛍️\n");
  res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});