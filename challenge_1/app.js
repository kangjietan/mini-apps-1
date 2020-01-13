var rowCol = document.getElementsByTagName('td');
console.log(rowCol);

var check = true;


const markBoard = (item) => { 
  console.log(item);
  var mark = check ? 'X' : 'O';
  item.innerHTML = mark; 
  check = !check;
  console.log(check);
}

for (var i = 0; i < rowCol.length; i++) {
  console.log(rowCol[i]);
  var test = rowCol[i];
  rowCol[i].addEventListener("click", (e) => { 
    console.log(e.target);
    markBoard(e.target); 
  });
}