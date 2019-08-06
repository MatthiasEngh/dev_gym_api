const http = require('http')
const axios = require('axios')

test('route can be used to setup a game', async () => {
  // first: one user connects, no match
  await axios.get(
    'http://127.0.0.1:3000/match',
    { player_id: "some_id1" }
  ).then(response => {
    expect(response.status).toEqual(204)
  })
  // second: first user reconnects, still no match
  await axios.get(
    'http://127.0.0.1:3000/match',
    { player_id: "some_id1" }
  ).then(response => {
    expect(response.status).toEqual(204)
  })
  // third: second user connects, match
  await axios.get(
    'http://127.0.0.1:3000/match',
    { player_id: "some_id2" }
  ).then(response => {
    expect(response.status).toEqual(200)
  })
  // fourth: first user reconnects, match
  await axios.get(
    'http://127.0.0.1:3000/match',
    { player_id: "some_id1" }
  ).then(response => {
    expect(response.status).toEqual(200)
  })
})
