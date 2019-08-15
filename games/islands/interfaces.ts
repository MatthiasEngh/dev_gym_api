export interface IslandData {
  ownership: number,
  playerOneSoldiers: number,
  playerTwoSoldiers: number
}

export interface SoldierCount {
  playerOne: number,
  playerTwo: number
}

export interface StateData {
  islands: Array<IslandData>,
  totalSoldiers: SoldierCount
}
  

