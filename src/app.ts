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

const player1: Array<any> = []
const player2: Array<any> = []
const results: Array<number> = []

const server = http.createServer(async (req: any, res: any) => {
  var path: string = url.parse(req.url).pathname
  var body: string
  var status: number = 500

  res.setHeader('Content-Type', 'text/plain')

  if (/^\/game/i.test(path)) {
    // store game data
    var game_data: string = ""
    req.on('data', function (data: string) {
      game_data += data
    })

    req.on('end', function () {
      if(setGameData(
        path.match(/^\/game\/([a-z]+)/i)[1],
        JSON.parse(game_data)
       )) {
        console.log("BOOBS!")
        updateGameResults()
        status = 200
      } else {
        console.log("ASS")
        status = 404
      }
      res.statusCode = status
      res.end(body)
    })
  } else if(/^\/results/i.test(path)) {
    body = getGameResults()
    res.statusCode = status
    res.end(body)
  } else {
    status = 404
    res.statusCode = status
    res.end(body)
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

function setGameData(player_id: string, game_data: Array<number>): boolean {
  // store game data in a way sorted by player
  if(player_id == "bricehaslice") {
    player1.push(game_data)
    return true
  } else if(player_id == "matisfat") {
    player2.push(game_data)
    return true
  } else {
    return false
  }
}

function updateGameResults() {
  // update game results
  // if min(submission_count(player1), submission_count(player2)) > game results
  // then determine winners for gamees without resultl
  // then store results
}

function getGameResults(): string {
  return ""
}
