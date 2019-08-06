const http = require('http');
const url = require('url');
const { Client } = require('pg')

const hostname = '127.0.0.1';
const db_host = hostname
const port = 3000;

const client = new Client({
  user: 'dev_gym_api',
  host: db_host,
  database: 'dev_gym_api',
  port: '5432',
})
client.connect()

const server = http.createServer(async (req: any, res: any) => {
  let path: string = url.parse(req.url).pathname
  let body: string
  let status: number = 500

  if (/^\/match/i.test(path)) {
    let res = await client.query("SELECT * FROM matches WHERE open='true' LIMIT 1")
    let open_match = res.rows[0]

    if(open_match) {
      await client.query(`UPDATE matches SET open='false' WHERE match_id='${open_match.match_id}'`)
      status = 200
    } else {
      await client.query("INSERT INTO matches (game_id) VALUES (uuid_generate_v1())")
      status = 204
    }
  } else {
    status = 404
  }

  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = status;
  res.end(body);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
