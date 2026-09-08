import http from 'http';
import * as teams from './Teams/teams.js';
const server = http.createServer();
server.on('request', (req, res) => {
  res.write("Welcome to Amazon Shopping 🛍️\n");
  res.write("Nodemon is running and watching for changes...\n");
  res.end();
});
server.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});