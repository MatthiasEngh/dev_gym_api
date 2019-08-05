const http = require('http')
const axios = require('axios')

// expect the match route to exist
test('route can be used to setup a game', async () => {
  await axios.get(
    'http://127.0.0.1:3000/match'
  ).then(response => {
    expect(response.status).toEqual(204)
  })
  await axios.get(
    'http://127.0.0.1:3000/match'
  ).then(response => {
    expect(response.status).toEqual(200)
  })
})
