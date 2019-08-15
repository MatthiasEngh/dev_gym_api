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


function nodeResult(prevOwnership: number, playerOneSoldiers: number, playerTwoSoldiers: number): number {
  const pOne = playerOneSoldiers
  const pTwo = playerTwoSoldiers
  if (pOne > pTwo)
    return 1
  else if (pTwo > pOne)
    return 2
  else
    return prevOwnership
}
