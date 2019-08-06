const http = require('http')
const axios = require('axios')

// these need to be put manually in the users db table
const player_1_id = 'e8b9c18e-b7ec-11e9-9b2c-c82a14432f08'
const player_2_id = 'e9fb515c-b7ec-11e9-9b2c-c82a14432f08'

test('route can be used to setup a game', async () => {
  // first: one user connects, no match
  await axios.get(
    'http://127.0.0.1:3000/match',
    { player_id: player_1_id }
  ).then(response => {
    expect(response.status).toEqual(204)
  })
  // second: first user reconnects, still no match
  await axios.get(
    'http://127.0.0.1:3000/match',
    { player_id: player_1_id }
  ).then(response => {
    expect(response.status).toEqual(204)
  })
  // third: second user connects, match
  await axios.get(
    'http://127.0.0.1:3000/match',
    { player_id: player_2_id }
  ).then(response => {
    expect(response.status).toEqual(200)
  })
  // fourth: first user reconnects, match
  await axios.get(
    'http://127.0.0.1:3000/match',
    { player_id: player_1_id }
  ).then(response => {
    expect(response.status).toEqual(200)
  })
})
