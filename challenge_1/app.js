/*
0 1 2
3 4 5
6 7 8

0: Check 1, 2 -> 4, 8 -> 3, 6
1: Check 0, 2 -> 4, 7
2: Check 0, 1 -> 4, 6 -> 5, 8
3: Check 0, 6 -> 4, 5
4: Check 0, 8 -> 1, 7 -> 2, 6 -> 3, 5
5: Check 3, 4 -> 2, 8
6: Check 0, 3 -> 2, 4 -> 7, 8
7: Check 1, 4 -> 6, 8
8: Check 0, 4 -> 2, 5 -> 6, 7 
*/

////////////// MODEL //////////////////////

var rowCol = document.getElementsByTagName('td');
var player1 = document.getElementsByClassName('p1')[0];
var player2 = document.getElementsByClassName('p2')[0];
var playerc = document.getElementsByClassName('cp')[0];
player1.innerHTML = '[X] ' + player1.innerHTML + '0 wins';
player2.innerHTML = '[O] ' + player2.innerHTML + '0 wins';
var check = true;
var boardCapacity = 0;

// First player is 1. After first move -> 2. 
// Changes after each move
var player = check ? 'Player 1': 'Player 2';

// Track the number of wins each player has
var wins = {
  'Player 1': 0,
  'Player 2': 0
}

// Board checks at each box
const boardChecks = {
  '0': [[1, 2], [4, 8], [3, 6]],
  '1': [[0, 2], [4, 7]],
  '2': [[0, 1], [4, 6], [5, 8]],
  '3': [[0, 6], [4, 5]],
  '4': [[0, 8], [1, 7], [2, 6], [3, 5]],
  '5': [[3, 4], [2, 8]],
  '6': [[0, 3], [2, 4], [7, 8]],
  '7': [[1, 4], [6, 8]],
  '8': [[0, 4], [2, 5], [6, 7]]
}