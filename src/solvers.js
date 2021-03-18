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
    // [1, 0, 0, 0]
    // [0, 1, 0, 0]
    // [0, 0, 0, 0]
    // [0, 0, 0, 0]
    // rowNumber at 1
    for (var i = 0; i < n; i++) {
      var newBoard = board;
      newBoard.togglePiece(rowNumber, i);
      if (!newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts()) {
        if (rowNumber < n - 1) {
          recursion(newBoard, rowNumber++);
        } else if (rowNumber === n - 1) {
          solutions.push(newBoard);
        }
      } else {
        newBoard.togglePiece(rowNumber, i);
      }
    }
  };

  for (var i = 0; i < n; i++) {
    var newBoard = board;
    newBoard.togglePiece(0, i);
    if (n === 1) {
      solutions.push(newBoard);
    } else {
      recursion(newBoard, 1);
    }
  }

  console.log(solutions);
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
