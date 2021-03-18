/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board ({n: n});
  var solutions = [];
  var recursion = function (board, rowNumber) {

    while (solutions.length !== 1) {
      for (var i = 0; i < n; i++) {
        board.togglePiece(rowNumber, i);

        if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
          if (rowNumber < n - 1) {
            recursion(board, rowNumber + 1);
          } else if (rowNumber === n - 1) {
            var newBoardArray = [];

            for (var key in board.rows()) {
              var newArray = [];

              for (var j = 0; j < board.rows()[key].length; j++) {
                newArray.push(board.rows()[key][j]);
              }
              newBoardArray.push(newArray);
            }
            // var newBoard = new Board(newBoardArray); //FIXED NEW BOARD FORM BOARD??!?
            solutions.push(newBoardArray);
          }
        }
        board.togglePiece(rowNumber, i);
      }
    }
  };


  recursion(board, 0);

  console.log(solutions);
  var solution = solutions[0];

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board ({n: n});
  var solutions = 0;
  var recursion = function (board, rowNumber) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(rowNumber, i);
      if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
        if (rowNumber < n - 1) {
          recursion(board, rowNumber + 1);
        } else if (rowNumber === n - 1) {
          solutions++;
        }
      }
      board.togglePiece(rowNumber, i);
    }
  };
  recursion(board, 0);


  console.log('Number of solutions for ' + n + ' rooks:', solutions);
  return solutions;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
