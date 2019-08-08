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
const results: Array<string> = []

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
      game_data = JSON.parse(game_data)
      if (!(validateGameData(game_data))) {
	status = 400
	body = "Game data not valid"
      }
      else if (setGameData(
        path.match(/^\/game\/([a-z]+)/i)[1],
        game_data
       )) {
        updateGameResults()
        status = 200
      } else {
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
  var count_both_players: number = Math.min(player1.length, player2.length)
  if(count_both_players > results.length) {
    for(var i = results.length; i < count_both_players; i++) {
      results.push(calculateWinner(player1[i], player2[i]))
    }
  }
}

function calculateWinner(player1_submission: Array<number>, player2_submission: Array<number>): string {
  var battlefield_count = 100
  var player1_victories = 0
  var player2_victories = 0
  for (var i = 0; i < battlefield_count; i ++) {
    if(player1_submission[i] > player2_submission[i]) {
      player1_victories += 1
    } else if (player2_submission[i] > player1_submission[i]) {
      player2_victories += 1
    }
  }
  if(player1_victories > player2_victories) {
    return "briceMAN"
  } else if(player2_victories > player1_victories) {
    return "matDUDE"
  }

  return "Both players suck"
}

function getGameResults(): string {
  return ""
}

function validateGameData(game_data: Array<number>): boolean {
  if (game_data.length != 100 || // limit 100 battlefields
      game_data.reduce((a, b) => a + b, 0) > 100  || // limit 100 soldiers
      !(game_data.filter(a => a % 1 != 0))) // all elements are integers
    return false
  else
    return true
}
