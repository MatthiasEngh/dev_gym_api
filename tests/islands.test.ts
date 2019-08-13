// const input
// const output
// const ownership = [0,1,2, ...]
// const soldiers = [0,42,3, ...]



const playerOneOwnership = 1
const playerTwoOwnership = 2
const noOwnership = 0

//    player one is defending
//      player one sends more
//      player two sends more
//      equal soldiers sent
describe('player one is defending', () => {
  const prevOwnership = playerOneOwnership

  it('player one sends more', () => {
    const soldiersOne = 5
    const soldiersTwo = 4
    const [newOwnership, soldiers] = nodeResult(prevOwnership, soldiersOne, soldiersTwo)
    assert(newOwnership).isEqual(prevOwnership)
    assert(soldiers).isEqual(soldiersOne + 1)
  })

  it('player two sends more', () => {
    const soldiersOne = 4
    const soldiersTwo = 5
    const [newOwnership, soldiers] = nodeResult(prevOwnership, soldiersOne, soldiersTwo)
    assert(newOwnership).isEqual(playerTwoOwnership)
    assert(soldiers).isEqual(soldiersTwo + 1)
  })

  it('equal soldiers sent', () => { // defender wins by default
    const soldiersOne = 4
    const soldiersTwo = 4
    const [newOwnership, soldiers] = nodeResult(prevOwnership, soldiersOne, soldiersTwo)
    assert(newOwnership).isEqual(playerOneOwnership)
    assert(soldiers).isEqual(0)
  })
})


//    player two is defending
//      player one sends more
//      player two sends more
//      equal soldiers sent
describe('player two is defending', () => {
  const prevOwnership = playerTwoOwnership

  it('player one sends more', () => {
    const soldiersOne = 5
    const soldiersTwo = 4
    const [newOwnership, soldiers] = nodeResult(prevOwnership, soldiersOne, soldiersTwo)
    assert(newOwnership).isEqual(playerOneOwnership)
    assert(soldiers).isEqual(soldiersOne)
  })

  it('player two sends more', () => {
    const soldiersOne = 4
    const soldiersTwo = 5
    const [newOwnership, soldiers] = nodeResult(prevOwnership, soldiersOne, soldiersTwo)
    assert(newOwnership).isEqual(playerTwoOwnership)
    assert(soldiers).isEqual(soldiersTwo + 1)
  })

  it('equal soldiers sent', () => {
    const soldiersOne = 4
    const soldiersTwo = 4
    const [newOwnership, soldiers] = nodeResult(prevOwnership, soldiersOne, soldiersTwo)
    assert(newOwnership).isEqual(playerTwoOwnership)
    assert(soldiers).isEqual(0)
  })
})



//    no one is defending
//      player one sends more
//      player two sends more
//      equal soldiers sent
