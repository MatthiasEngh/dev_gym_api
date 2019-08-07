const http = require('http')
const url = require('url')
const { Client } = require('pg')

const hostname = '127.0.0.1'
const db_host = hostname
const port = 3000

const client = new Client({
  user: 'dev_gym_api',
  host: db_host,
  database: 'dev_gym_api',
  port: '5432',
})
client.connect()

const player1: Array<any>
const player2: Array<any>
const results: Array<number>

const server = http.createServer(async (req: any, res: any) => {
  let path: string = url.parse(req.url).pathname
  let body: string
  let status: number = 500

  if (/^\/game/i.test(path)) {
    // store game data
  } else if(/^\/results/i.test(path)) {
    // return game results in body
  } else {
    status = 404
  }

  res.setHeader('Content-Type', 'text/plain')
  res.statusCode = status
  res.end(body)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

const setGameData(player_id, game_data) {
  // store game data in a way sorted by player
}

const updateGameResults() {
  // update game results
  // if min(submission_count(player1), submission_count(player2)) > game results
  // then determine winners for gamees without resultl
  // then store results
}

const getGameResults() {
  // return game results
}
