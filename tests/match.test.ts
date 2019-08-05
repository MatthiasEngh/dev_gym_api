const http = require('http')
const axios = require('axios')

// expect the match route to exist
test('route /match exists', async () => {
  axios.get(
    '127.0.0.1:3000/match'
  ).then( response => {
    expect(response.status).not.toEqual(404)
  })
})
