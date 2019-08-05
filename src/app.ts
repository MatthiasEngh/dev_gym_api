const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req: any, res: any) => {
  let path: string = url.parse(req.url).pathname

  if (/^\/game/i.test(path)) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('game');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('NO MANS LAND, go to /game');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
