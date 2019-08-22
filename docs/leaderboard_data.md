# Leaderboard Data

We want to create some sort of leaderboard. It seems like a generally cool thing that makes for a more real time and engaging competition. I just want to come up with a basic design suggestion here.

#### What is it we really want?

Perhaps we'd like to go with an all time leaderboard, one weekly leaderboard, perhaps leaderboards which update real time. I don't think we need to make these decisions yet, but we can come up with a scheme which support all of this.

#### What data would we like to display?

I don't know yet. We may want to do really whacked out stuff like advanced statistics on average number of moves before a knock out, or evolution of node ownership over time. For now I'll just go with a basic design which is flexible enough to give a couple of options, but doesn't assume we're going to get too creative.

#### Basic scheme

Here's what I think would be necessary for a really simple leaderboard data solution:

- players
  - we want to associate the data with a player. We need to know who's the leader!
- Winner
  - we need to know the outcome of the game to determine the overall leaders. The games aren't really set up to provide a per game score. The outcome is either a win, a draw or a loss
- Timestamp
  - In order to do stuff like weekly leaderboards, or perhaps graphs showing victories per day etc and just for our internal records this is the last column I suggest we add

#### Implementation

I think we should use a database. Databases are easy to use, easy to extract data from and the standard solution for server data. so we need three or four columns. I say three or four since we could make a player column, including all players that may have been part of a game, or we could create a player1 and player2 column. There are other options too. 

The reason why this decision is important is since if we'd like to use the same table for many games which potentially could have different number of players we'd need to make this decision. A column per player makes querying for games per player trivial however and is the way I prefer.

There are alternatives to this. We could add another table for player game participation records. Then a game could have any number of players and it would still be easy to query. This makes the database model a lot less easy to understand from a dev perspective, and since we're not bound to doing this I think we shouldn't.

so here's my suggestion:

- playerOneID: UUID, null false
- playerTwoID: UUID, null false
- outcome: NUMBER, null false
- timestamp: TIMESTAMP, null false, default CURRENT_TIME

I was playing with the thought of leaving outcome optional, thinking we could have records for unfinished games, however why would we? We just care about results here and there is no need to complicate things by adding a non-result.