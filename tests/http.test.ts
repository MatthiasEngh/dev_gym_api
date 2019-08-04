const http = require('http')
const axios = require('axios')


//require('./') // start server // TODO: does below line work?
test('bad auth', async () => {
    const response = await axios.get(
	'127.0.0.1:3000',
	{
	    auth: {
		username: 'fake',
		password: 'bad'
	    }
	})
    expect(response.status).toEqual(400)
})

test('good auth', async () => {
    const response = await axios.get(
	'127.0.0.1:3000',
	{
	    auth: {
		username: 'username',
		password: 'password'
	    }
	})
    expect(response.status).toEqual(200)
    expect(response.data.token).toBeTruthy()
})

test('matchmaking', async () => {
    const playerOneToken = await getAuthToken()

    // Wrong game key
    const badGameKeyResponse = await axios.get(
	'127.0.0.1:3000/nope',
	{
	    headers: {
		Authorization: playerOneToken
	    }
	})
    expect(badGameKeyResponse.status).toEqual(404) // 404 == Not found

    // No match yet configured
    const firstMatchmakingResponse = await axios.get(
	'127.0.0.1:3000/game1',
	{
	    headers: {
		Authorization: playerOneToken
	    }
	})
    expect(firstMatchmakingResponse.status).toEqual(204) // 204 == No content
    expect(firstMatchmakingResponse.data).toBeNull()

    // Create 2nd player, still no match
    const playerTwoToken = getAuthToken()
    const secondMatchmakingResponse = await axios.get(
	'127.0.0.1:3000/game1',
	{
	    headers: {
		Authorization: playerTwoToken
	    }
	})
    expect(secondMatchmakingResponse.status).toEqual(200)
    expect(secondMatchmakingResponse.data).toEqual(
	{} // TODO: expected match response goes here 
    )

    // Retry w/ player one, should receive same game as player two
    const thirdMatchmakingResponse = await axios.get(
	'127.0.0.1:3000/game1',
	{
	    headers: {
		Authorization: playerOneToken
	    }
	})
    expect(secondMatchmakingResponse.status).toEqual(200)
    expect(secondMatchmakingResponse.data).toEqual(
	{} // TODO: expected match response goes here 
    )
})

async function getAuthToken() { // TODO: does this return a new user each time?
    const authResponse = await axios.get(
	'127.0.0.1:3000',
	{
	    auth: {
		username: 'username',
		password: 'password'
	    }
	})
    expect(authResponse.status).toEqual(200)
    expect(authResponse.data.token).toBeTruthy()
    return authResponse.data.token
}



