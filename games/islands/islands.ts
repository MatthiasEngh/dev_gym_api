// game start:
// [
//   {
//     playerUUID: 'matthias',
//     playerNumber: 1
//   },
//   {
//     playerUUID: 'brice',
//     playerNumber: 2
//   }
// ]
// 
// player input:
// [ 2, 4, 4, 42, 1, 0, 0, 23, 0, ... ]
// 
// game move returns:
// {
//   "islands":
//   [
//     {
//       "ownership": 2,  
//       "playerOneSoldiers": 2,
//       "playerTwoSoldiers": 5
//     },
//     {
//       "ownership": 0,  
//       "playerOneSoldiers": 2,
//       "playerTwoSoldiers": 2
//     },
//     {
//       "ownership": 1,
//       "playerOneSoldiers": 0,
//       "playerTwoSoldiers": 0
//     }
//   ]
//   "totalSoldiers": {
//     "playerOne": 123,
//     "playerTwo": 63
//   }
// }


export function nodeResult(prevOwnership: number, playerOneSoldiers: number, playerTwoSoldiers: number): [number, number] {
  const pOne = playerOneSoldiers
  const pTwo = playerTwoSoldiers
  const newSoldierCount = Math.max(pOne, pTwo) + 1
  if (pOne > pTwo)
    return [1, newSoldierCount]
  else if (pTwo > pOne)
    return [2, newSoldierCount]
  else if ((pTwo == pOne) && (prevOwnership))
    return [prevOwnership, newSoldierCount]
  else if ((pTwo == pOne) && !(prevOwnership))
    return [prevOwnership, 0]
  // no soldiers moved to node
  else if (prevOwnership)
    return [prevOwnership, 1] 
  else // no ownership, no soldiers awarded
    return [prevOwnership, 0]
}
