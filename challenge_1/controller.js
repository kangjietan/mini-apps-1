////////////// CONTROLLER //////////////////////

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
  var conditions = boardChecks[box.id];

  // Check the conditions based on box
  for (var i = 0; i < conditions.length; i++) {
    var conditionCheck = conditions[i];
    var fC = conditionCheck[0]; // first condition check
    var sC = conditionCheck[1]; // second condition check
    var oC = box.innerHTML;     // box text that was marked

    // Current player before it was changed in markBoard
    var currentPlayer = check ? 'Player 2': 'Player 1';

    // If current play action matches with each given condition
    if (rowCol[fC].innerHTML === oC && rowCol[sC].innerHTML === oC) {

      // Display wins of each player
      wins[currentPlayer]++;
      if (currentPlayer === 'Player 1') {
        player1.innerHTML = 'Player 1: ' + wins[currentPlayer] + (wins[currentPlayer] > 1 ? ' wins' : ' win');
      } else {
        player2.innerHTML = 'Player 2: ' + wins[currentPlayer] + (wins[currentPlayer] > 1 ? ' wins' : ' win');
      }

      // Notify winner
      alert(`${currentPlayer} wins!`);
      
      // Reset board after game ends
      setTimeout(resetBoard, 1000);
      return;
    }
  }

  // No one wins, reset board
  if (boardCapacity === 9) {
    alert("Game finished! It's a tie");
    setTimeout(resetBoard, 1000);
  }
}

// Mark board where box is clicked
const markBoard = (box) => { 
  // Don't allow box to change once set
  if (box.innerHTML === 'X' || box.innerHTML === 'O') {
    alert('Box occupied!');
    return;
  }

  // Set box to X or O based on player
  var mark = check ? 'X' : 'O';
  box.innerHTML = mark;
  boardCapacity++;

  // Change to next player
  check = !check;
  player = check ? 'Player 1': 'Player 2';

  // Check if a player has won or not
  checkBoard(box);
}