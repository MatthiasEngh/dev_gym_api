const http = require('http');
const url = require('url');
const { Client } = require('pg')

const client = new Client({
  user: 'dev_gym_api',
  host: '127.0.0.1',
  database: 'dev_gym_api',
  port: '5432',
})

async function connect_client() {
  await client.connect()
}
connect_client()

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req: any, res: any) => {
  let path: string = url.parse(req.url).pathname
  let body: string
  let status: number

  if (/^\/match/i.test(path)) {
    status = 204
  } else {
    status = 404
    body = 'NO MANS LAND, go to /game'
  }

  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = status;
  res.end(body);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
