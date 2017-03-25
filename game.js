'use strict';

function createBoard(rowCount, columnCount) {
  let board = [];

  // create rows
  for (let i = 0; i < rowCount; i++) {
    let row = [];

    // create columns
    for (let j = 0; j < columnCount; j++) {
      let column = {
        rowIndex: i,
        columnIndex: j,
        occupants: [],
      };

      row.push(column);
    }
    board.push(row);
  }

  return board;
}

function createCharacter(name, board, rowIndex, columnIndex) {
  let character = {
    name: name,
    rowIndex: -1,
    columnIndex: -1,
  };

  if (board && rowIndex > -1 && columnIndex > -1) {
    positionCharacter(character, null, board[rowIndex][columnIndex]);
  }

  return character;
}

function positionCharacter(character, before, after) {
  if (before) {
    let index = before.occupants.indexOf(character);
    if (index !== -1) {
      before.occupants.splice(index, 1);
    } else {
      throw 'character was not in previous position';
    }
  }

  after.occupants.push(character);
  character.rowIndex = after.rowIndex;
  character.columnIndex = after.columnIndex;
}

function getPosition(character) {
  return board[character.rowIndex][character.columnIndex];
}

let board = createBoard(5, 5);
let character1 = createCharacter('hero');
let character2 = createCharacter('villain');

positionCharacter(character1, null, board[2][0]);
positionCharacter(character2, null, board[2][4]);
positionCharacter(character1, getPosition(character1), board[0][0]);

console.log(board);
console.log(character1);
console.log(character2);
