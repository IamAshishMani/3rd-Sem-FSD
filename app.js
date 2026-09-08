import http from 'http';

const server = http.createServer();
server.on('request', (req, res) => {
  res.write("Welcome to Amazon Shopping 🛍️\n");
  res.write("Nodemon is running and watching for changes...\n");
  res.end();
});
server.listen(5000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});