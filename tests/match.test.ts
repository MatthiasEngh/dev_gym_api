const http = require('http')
const axios = require('axios')

// expect the match route to exist
test('route /match exists', async () => {
  return axios.get(
    'http://127.0.0.1:3000/match'
  )
})
