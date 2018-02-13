/* 
first runthrough just render board and have it be able to toggle! No player 1 or two. 
No winning cases
No picking one player or the other. 
Just render and have it move. 
*/
// var playerOne = function (name) {
//   this.name = name;
//   this.score = 0;
//   this.board = [
//   [0,0,0], [0,0,0], [0,0,0]
//   ];
// }

// var playerTwo = function (name) {
//   this.name = name;
//   this.score = 0;
//   this.board = [
//   [0,0,0], [0,0,0], [0,0,0]
//   ];
// }


var Board = function() {
  this.board = [
  [0,0,0], [0,0,0], [0,0,0]
  ];
  // this.playerOne = new playerOne(pOneName)
  // this.playerTwo = new playerTwo(pTwoName)
  this.turn = 'x'
  this.render();
}

var master = [
  [0,0,0], [0,0,0], [0,0,0]
  ];
var turn = 'x'
var rounds = 0;


Board.prototype.render = function () {
  console.log(this)
  // var row = '<div>' + 'hello' + '</div>';
  // var board = document.createElement('div');
  // board.setAttribute('class', 'board');

  var board = document.getElementsByClassName('board')[0];
  // document.body.appendChild(board);
  master.forEach(function (place, index) {
    var row = document.createElement('tr');
    row.setAttribute('class', 'row-' + index);
    row.style.width = "100%"
    row.style.height = "250px"
    board.appendChild(row);

    place.forEach(function (space, index2){
    
      var inner = document.createElement('td');
      inner.setAttribute('class', index + '-' + index2);
      inner.setAttribute('onclick', "Board.prototype.toggle(event)")
      inner.style.display = "inline-block"
      inner.style.width = "30%"
      inner.height="200px"
      inner.textContent = '';
      inner.style.border="thin solid black"
      // inner.style.borderColor="blue"
      // inner.align="center";
      // inner.style.width = "33%";
      // inner.style.border = "1px solid 000000"
      // inner.style.border-color="000000"
      // inner.onclick = function () {
      //   inner.textContent = 'x'	
      // }
      // inner.style.border = "thin solid #000000"	
      // document.getElementsByClassName('row-' + index).appendChild(inner);	
      row.appendChild(inner);
    })
  })	
}


Board.prototype.toggle = function (event) {
	var row = event.target.className[0];
	row = Number(row);
	var col = event.target.className[2];
	col = Number(col);
    rounds++;
	if ((turn === 'x') && (!master[row][col])) {
	  master[row][col] = 1;
	  turn = 'o';	
	  var clicked = event.target;
	  clicked.innerHTML='x';
    } else if ((turn === 'o') && (!master[row][col])) {
      master[row][col] = 2;
      turn = 'x';
      clicked = event.target;
	  clicked.innerHTML='o';	
    }
    rowWinner();
    colWinner();
    diWinner();
    if (rounds === 9) {

      document.getElementsByClassName('title')[0].textContent="CAT'S GAME!"
    } 
  // if (!this.board[row][col]) {
  //   this.board[row][col] = 1;
  //   document.getElements
  // } else {

  // }
}






var rowWinner = function () {

  var winner = false;
  master.forEach(function (row) {
  	var counter = 0
  	var counter2 = 0
  	row.forEach(function (element){
  	  if (element === 1) {
        counter++
  	  }	
  	  if (element === 2) {
  	    counter2++	
  	  }
  	  if ((counter === 3) || (counter2 === 3)) {
  	    winner = true;	
  	  }
  	})
  })
  if ((winner) && (turn === 'o')) {
    document.getElementsByClassName('title')[0].textContent="PLAYER X WINS"
    clear();	
  } else if ((winner) && (turn === 'x')) {
    document.getElementsByClassName('title')[0].textContent="PLAYER O WINS"	
    clear();
  }
}

var colWinner = function () {

  var winner = false;
  for (var r = 0; r < master.length; r ++) {
  	  var counter = 0;
  	  var counter2 = 0
     for (var c = 0; c < master[r].length; c++) {
       if (master[c][r] === 1) {
         counter++
       }
       if (master[c][r] === 2) {
         counter2++	
       }
       if ((counter === 3) || (counter2 === 3)) {
         winner = true;
       }
     }
  }
  if ((winner) && (turn === 'o')) {
    document.getElementsByClassName('title')[0].textContent="PLAYER X WINS"	
    clear();
  } else if ((winner) && (turn === 'x')) {
    document.getElementsByClassName('title')[0].textContent="PLAYER O WINS"	
    clear()
  }
}

var diWinner = function () {
  var winner = false;
    var counter = 0;
	  var counterTwo = 0;
	  var counterThree = 0;
	  var counterFour = 0;
  for (var r = 0; r < master.length; r ++) {
	  var counter = 0;
	  var counterTwo = 0;
	  var counterThree = 0;
	  var counterFour = 0;
	  if ((master[r][r]) === 1) {
	    counter++
	  }
	  if ((master[r][master.length-1-r]) === 1) {
	    counterTwo++;	
	  }
	  if ((master[r][r]) === 2) {
	    counterThree++
	  }
	  if ((master[r][master.length-1-r]) === 2) {
	    counterFour++;	
	  }
  }
  if ((counter === 3) || (counterTwo === 3) || (counterThree === 3) || (counterFour === 3)){
	    winner = true;
	}
  if ((winner) && (turn === 'o')) {
    document.getElementsByClassName('title')[0].textContent="PLAYER X WINS"
    clear();	
  } else if ((winner) && (turn === 'x')) {
    document.getElementsByClassName('title')[0].textContent="PLAYER O WINS"	
    clear();
  }
}


var clear = function () {
  
}
new Board();

// splice(3,0, ' class=\"' + 'row' + index + '\"')