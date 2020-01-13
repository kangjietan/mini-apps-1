/*
0 1 2
3 4 5
6 7 8
*/
var rowCol = document.getElementsByTagName('td');

var check = true;
var boardCapacity = 0;

/*
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

const boardChecks = {
  '0': [[1, 2], [4, 8], [3, 6]],
  '1': [[0, 2], [4, 7]],
  '2': [[0, 1], [4, 6], [5, 8]],
  '3': [[0, 6], [4, 5]],
  '4': [[0, 8], [1, 7], [2, 6], [3, 5]],
  '5': [[3, 4], [2, 8]],
  '6': [[0, 3], [2, 4], [7, 7]],
  '7': [[1, 4], [6, 8]],
  '8': [[0, 4], [2, 5], [6, 7]]
}

const checkBoard = (box) => {
  if (boardCapacity === 9) {
    console.log('Game finished');
  }
  console.log("Checking Board: ", box.id);
  console.log("Current Box", document.getElementById(box.id));

}

const markBoard = (item) => { 
  console.log(item);
  if (item.innerHTML === 'X' || item.innerHTML === 'O') {
    alert('Box occupied!');
    return;
  }
  var mark = check ? 'X' : 'O';
  item.innerHTML = mark;
  boardCapacity++; 
  check = !check;
  checkBoard(item);
  console.log(check);
  var player = check ? 'Player 1': 'Player 2';
  alert(`${player} turn now!`);
}

for (var i = 0; i < rowCol.length; i++) {
  var test = rowCol[i];
  rowCol[i].addEventListener("click", (e) => { 
    markBoard(e.target); 
  });
}