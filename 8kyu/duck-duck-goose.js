// The objective of Duck, duck, goose is to walk in a circle, 
// tapping on each player's head until one is chosen.

// Task:

// Given an array of Player objects and a position (first position is 1), 
// return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name

//My solution
function duckDuckGoose(players, goose) {
 return players[goose-1].name
  }