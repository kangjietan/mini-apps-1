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

var rowCol = document.getElementsByTagName('td');
var check = true;
var boardCapacity = 0;
var player = check ? 'Player 1': 'Player 2';

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

// Clear board
const resetBoard = () => {
  for (var i = 0; i < rowCol.length; i++) {
    rowCol[i].innerHTML = "";
  }
  check = true;
  boardCapacity = 0;
}

// Check board to see if someone has won
const checkBoard = (box) => {
  if (boardCapacity === 9) {
    console.log('Game finished');
    resetBoard();
  }
  var conditions = boardChecks[box.id];

  // Check the conditions based on box
  for (var i = 0; i < conditions.length; i++) {
    var conditionCheck = conditions[i];
    var fC = conditionCheck[0];
    var sC = conditionCheck[1];
    var oC = box.innerHTML;
    var currentPlayer = check ? 'Player 2': 'Player 1';
    if (rowCol[fC].innerHTML === oC && rowCol[sC].innerHTML === oC) {
      console.log(`${currentPlayer} wins!`);
      alert(`${currentPlayer} wins!`);
      resetBoard();
      return;
    }
  }
}

// Mark board where box is clicked
const markBoard = (item) => { 
  console.log(item);
  // Don't allow box to change once set
  if (item.innerHTML === 'X' || item.innerHTML === 'O') {
    alert('Box occupied!');
    return;
  }

  // Set box to X or O based on player
  var mark = check ? 'X' : 'O';
  item.innerHTML = mark;
  boardCapacity++;

  // Change to next player
  check = !check;
  player = check ? 'Player 1': 'Player 2';

  // Check if a player has won or not
  // alert(`${player} turn now!`);
  checkBoard(item);
  console.log(check);
}

// Add event listener to each box
for (var i = 0; i < rowCol.length; i++) {
  var test = rowCol[i];
  rowCol[i].addEventListener("click", (e) => { 
    markBoard(e.target); 
  });
}