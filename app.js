import http from 'http';
import * as teams from './Teams/teams.js';
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const teams = teams.getAllTeams();
    res.write(JSON.stringify(teams));
  }
  else {
    res.statusCode = 404;
    res.write('Not Found');
    res.end();
  }
});
server.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});