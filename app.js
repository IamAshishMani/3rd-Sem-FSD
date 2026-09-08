import http from 'http';
import * as teams from './teams.js';

const sendJSON = (res, statusCode, data) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

const parseJsonBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
};

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const teamsList = teams.getAllTeams();
    sendJSON(res, 200, teamsList);
  }
  else {
    sendJSON(res, 404, { error: 'Not Found' });
  }
});
server.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});