const http = require('http');
const https = require('https');
const { parse } = require('url');
const next = require('next');

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

  let createServer;
  if (process.env.NODE_ENV === 'production'){
    createServer = https.createServer
  } else {
    createServer = http.createServer
  }

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/a') {
      app.render(req, res, '/a', query);
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(8080, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${process.env.NODE_ENV === 'production' ? 'https' : 'http'}://localhost:8080`);
  });
});
