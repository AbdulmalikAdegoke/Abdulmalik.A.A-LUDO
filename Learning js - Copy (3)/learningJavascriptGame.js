const canvas = document.getElementById('boardCanvas');
const ctx = canvas.getContext('2d');


canvas.addEventListener("click", onClick, false);

//the paths
var redTilePath = [
  [260, 540],
  [260, 500],
  [260, 460],
  [260, 420],
  [260, 380], //red territory
  [220, 340],
  [180, 340],
  [140, 340],
  [100, 340],
  [60, 340],
  [20, 340], //green territory
  [20, 300],
  [20, 260], //green territory
  [60, 260],
  [100, 260],
  [140, 260],
  [180, 260],
  [220, 260], //green territory
  [260, 220],
  [260, 180],
  [260, 140],
  [260, 100],
  [260, 60],
  [260, 20], //yellow territory
  [300, 20],
  [340, 20], //yellow territory
  [340, 60],
  [340, 100],
  [340, 140],
  [340, 180],
  [340, 220], //yellow territory
  [380, 260],
  [420, 260],
  [460, 260],
  [500, 260],
  [540, 260],
  [580, 260], //blue territory
  [580, 300],
  [580, 340], //blue territory
  [540, 340],
  [500, 340],
  [460, 340],
  [420, 340],
  [380, 340], //blue territory
  [340, 380],
  [340, 420],
  [340, 460],
  [340, 500],
  [340, 540],
  [340, 580], //red territory
  [300, 580], //red territory
  [300, 540],
  [300, 500],
  [300, 460],
  [300, 420],
  [300, 380], //red territory
  [300, 340] //red winner spot
];
var yellowTilePath = [
  [340, 60],
  [340, 100],
  [340, 140],
  [340, 180],
  [340, 220], //yellow territory
  [380, 260],
  [420, 260],
  [460, 260],
  [500, 260],
  [540, 260],
  [580, 260], //blue territory
  [580, 300],
  [580, 340], //blue territory
  [540, 340],
  [500, 340],
  [460, 340],
  [420, 340],
  [380, 340], //blue territory
  [340, 380],
  [340, 420],
  [340, 460],
  [340, 500],
  [340, 540],
  [340, 580], //red territory
  [300, 580],
  [260, 580], //red territory
  [260, 540],
  [260, 500],
  [260, 460],
  [260, 420],
  [260, 380], //red territory
  [220, 340],
  [180, 340],
  [140, 340],
  [100, 340],
  [60, 340],
  [20, 340], //green territory
  [20, 300],
  [20, 260], //green territory
  [60, 260],
  [100, 260],
  [140, 260],
  [180, 260],
  [220, 260], //green territory
  [260, 220],
  [260, 180],
  [260, 140],
  [260, 100],
  [260, 60],
  [260, 20], //yellow territory
  [300, 20], //yellow territory
  [300, 60],
  [300, 100],
  [300, 140],
  [300, 180],
  [300, 220], //yellow territory
  [300, 260] //yellow winner spot
];
var blueTilePath = [
  [540, 340],
  [500, 340],
  [460, 340],
  [420, 340],
  [380, 340], //blue territory
  [340, 380],
  [340, 420],
  [340, 460],
  [340, 500],
  [340, 540],
  [340, 580], //red territory
  [300, 580],
  [260, 580], //red territory
  [260, 540],
  [260, 500],
  [260, 460],
  [260, 420],
  [260, 380], //red territory
  [220, 340],
  [180, 340],
  [140, 340],
  [100, 340],
  [60, 340],
  [20, 340], //green territory
  [20, 300],
  [20, 260], //green territory
  [60, 260],
  [100, 260],
  [140, 260],
  [180, 260],
  [220, 260], //green territory
  [260, 220],
  [260, 180],
  [260, 140],
  [260, 100],
  [260, 60],
  [260, 20], //yellow territory
  [300, 20],
  [340, 20], //yellow territory
  [340, 60],
  [340, 100],
  [340, 140],
  [340, 180],
  [340, 220], //yellow territory
  [380, 260],
  [420, 260],
  [460, 260],
  [500, 260],
  [540, 260],
  [580, 260], //blue territory
  [580, 300], //blue territory
  [540, 300],
  [500, 300],
  [460, 300],
  [420, 300],
  [380, 300], //blue territory
  [340, 300] //blue winner spot
];
var greenTilePath = [
  [60, 260],
  [100, 260],
  [140, 260],
  [180, 260],
  [220, 260], //green territory
  [260, 220],
  [260, 180],
  [260, 140],
  [260, 100],
  [260, 60],
  [260, 20], //yellow territory
  [300, 20],
  [340, 20], //yellow territory
  [340, 60],
  [340, 100],
  [340, 140],
  [340, 180],
  [340, 220], //yellow territory
  [380, 260],
  [420, 260],
  [460, 260],
  [500, 260],
  [540, 260],
  [580, 260], //blue territory
  [580, 300],
  [580, 340], //blue territory
  [540, 340],
  [500, 340],
  [460, 340],
  [420, 340],
  [380, 340], //blue territory
  [340, 380],
  [340, 420],
  [340, 460],
  [340, 500],
  [340, 540],
  [340, 580], //red territory
  [300, 580],
  [260, 580], //red territory
  [260, 540],
  [260, 500],
  [260, 460],
  [260, 420],
  [260, 380], //red territory
  [220, 340],
  [180, 340],
  [140, 340],
  [100, 340],
  [60, 340],
  [20, 340], //green territory
  [20, 300], //green territory
  [60, 300],
  [100, 300],
  [140, 300],
  [180, 300],
  [220, 300], //green territory
  [260, 300] //green winner spot
];

//the default positions of the tiles in their base
var redTilesPosition = {
  rTile1: -1, //[87,447]
  rTile2: -1, //[87,513]
  rTile3: -1, //[153,447]
  rTile4: -1 //[153,513]
};

var greenTilesPosition = {
  gTile1: -1, //[87,87]
  gTile2: -1, //[153,87]
  gTile3: -1, //[87,153]
  gTile4: -1 //[153,153]
};

var yellowTilesPosition = {
  yTile1: -1, //[447,87]
  yTile2: -1, //[513,87]
  yTile3: -1, //[447,153]
  yTile4: -1 //[513,153]
};

var blueTilesPosition = {
  bTile1: -1, //[447,447]
  bTile2: -1, //[447,513]
  bTile3: -1, //[513,447]
  bTile4: -1 //[513,513]
};

/* Dice functions */
function rollDice() {
  document.getElementById('diceRoll').removeEventListener("click", function () {
    diceValue = rollDice();
  });
  var diceValue;
  var diceValue1;
  var diceValue2;
  diceValue1 = Math.floor((Math.random() * 6) + 1);
  diceValue2 = Math.floor((Math.random() * 6) + 1);

  // diceValue=[diceValue1,diceValue2]
  // var firstDie=diceValue[0].toString();
  // var secondDie=diceValue[1].toString();

  document.getElementById('die1').src = "Images/" + firstDie + ".jpg";
  document.getElementById('die2').src = "Images/" + secondDie + ".jpg";

  return diceValue;
}


//enables the movement pieces
function tileMove(turn, selectedTile, selectedDie, selectedTilePosition) {
  var x, y;
  if (turn == "red") {
    if (selectedTile == "redTile1") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          redTilesPosition.rTile1 = redTilesPosition.rTile1 + 1;
          x = redTilePath[redTilesPosition.rTile1][0];
          y = redTilePath[redTilesPosition.rTile1][1];
          addPosition(x, y, redTile1Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (redTilesPosition.rTile1 + selectedDie <= 56) {
          redTilesPosition.rTile1 = redTilesPosition.rTile1 + selectedDie;
          x = redTilePath[redTilesPosition.rTile1][0];
          y = redTilePath[redTilesPosition.rTile1][1];
          addPosition(x, y, redTile1Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "redTile2") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          redTilesPosition.rTile2 = redTilesPosition.rTile2 + 1;
          x = redTilePath[redTilesPosition.rTile2][0];
          y = redTilePath[redTilesPosition.rTile2][1];
          addPosition(x, y, redTile2Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (redTilesPosition.rTile2 + selectedDie <= 56) {
          redTilesPosition.rTile2 = redTilesPosition.rTile2 + selectedDie;
          x = redTilePath[redTilesPosition.rTile2][0];
          y = redTilePath[redTilesPosition.rTile2][1];
          addPosition(x, y, redTile2Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "redTile3") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          redTilesPosition.rTile3 = redTilesPosition.rTile3 + 1;
          x = redTilePath[redTilesPosition.rTile3][0];
          y = redTilePath[redTilesPosition.rTile3][1];
          addPosition(x, y, redTile3Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (redTilesPosition.rTile3 + selectedDie <= 56) {
          redTilesPosition.rTile3 = redTilesPosition.rTile3 + selectedDie;
          x = redTilePath[redTilesPosition.rTile3][0];
          y = redTilePath[redTilesPosition.rTile3][1];
          addPosition(x, y, redTile3Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "redTile4") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          redTilesPosition.rTile4 = redTilesPosition.rTile4 + 1;
          x = redTilePath[redTilesPosition.rTile4][0];
          y = redTilePath[redTilesPosition.rTile4][1];
          addPosition(x, y, redTile4Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (redTilesPosition.rTile4 + selectedDie <= 56) {
          redTilesPosition.rTile4 = redTilesPosition.rTile4 + selectedDie;
          x = redTilePath[redTilesPosition.rTile4][0];
          y = redTilePath[redTilesPosition.rTile4][1];
          addPosition(x, y, redTile4Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    }
  } else if (turn == "green") {
    if (selectedTile == "greenTile1") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          greenTilesPosition.gTile1 = greenTilesPosition.gTile1 + 1;
          x = greenTilePath[greenTilesPosition.gTile1][0];
          y = greenTilePath[greenTilesPosition.gTile1][1];
          addPosition(x, y, greenTile1Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (greenTilesPosition.gTile1 + selectedDie <= 56) {
          greenTilesPosition.gTile1 = greenTilesPosition.gTile1 + selectedDie;
          x = greenTilePath[greenTilesPosition.gTile1][0];
          y = greenTilePath[greenTilesPosition.gTile1][1];
          addPosition(x, y, greenTile1Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "greenTile2") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          greenTilesPosition.gTile2 = greenTilesPosition.gTile2 + 1;
          x = greenTilePath[greenTilesPosition.gTile2][0];
          y = greenTilePath[greenTilesPosition.gTile2][1];
          addPosition(x, y, greenTile2Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (greenTilesPosition.gTile2 + selectedDie <= 56) {
          greenTilesPosition.gTile2 = greenTilesPosition.gTile2 + selectedDie;
          x = greenTilePath[greenTilesPosition.gTile2][0];
          y = greenTilePath[greenTilesPosition.gTile2][1];
          addPosition(x, y, greenTile2Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "greenTile3") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          greenTilesPosition.gTile3 = greenTilesPosition.gTile3 + 1;
          x = greenTilePath[greenTilesPosition.gTile3][0];
          y = greenTilePath[greenTilesPosition.gTile3][1];
          addPosition(x, y, greenTile3Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (greenTilesPosition.gTile3 + selectedDie <= 56) {
          greenTilesPosition.gTile3 = greenTilesPosition.gTile3 + selectedDie;
          x = greenTilePath[greenTilesPosition.gTile3][0];
          y = greenTilePath[greenTilesPosition.gTile3][1];
          addPosition(x, y, greenTile3Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "greenTile4") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          greenTilesPosition.gTile4 = greenTilesPosition.gTile4 + 1;
          x = greenTilePath[greenTilesPosition.gTile4][0];
          y = greenTilePath[greenTilesPosition.gTile4][1];
          addPosition(x, y, greenTile4Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (greenTilesPosition.gTile4 + selectedDie <= 56) {
          greenTilesPosition.gTile4 = greenTilesPosition.gTile4 + selectedDie;
          x = greenTilePath[greenTilesPosition.gTile4][0];
          y = greenTilePath[greenTilesPosition.gTile4][1];
          addPosition(x, y, greenTile4Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    }
  } else if (turn == "yellow") {
    if (selectedTile == "yellowTile1") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          yellowTilesPosition.yTile1 = yellowTilesPosition.yTile1 + 1;
          x = yellowTilePath[yellowTilesPosition.yTile1][0];
          y = yellowTilePath[yellowTilesPosition.yTile1][1];
          addPosition(x, y, yellowTile1Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (yellowTilesPosition.yTile1 + selectedDie <= 56) {
          yellowTilesPosition.yTile1 = yellowTilesPosition.yTile1 + selectedDie;
          x = yellowTilePath[yellowTilesPosition.yTile1][0];
          y = yellowTilePath[yellowTilesPosition.yTile1][1];
          addPosition(x, y, yellowTile1Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "yellowTile2") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          yellowTilesPosition.yTile2 = yellowTilesPosition.yTile2 + 1;
          x = yellowTilePath[yellowTilesPosition.yTile2][0];
          y = yellowTilePath[yellowTilesPosition.yTile2][1];
          addPosition(x, y, yellowTile2Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (yellowTilesPosition.yTile2 + selectedDie <= 56) {
          yellowTilesPosition.yTile2 = yellowTilesPosition.yTile2 + selectedDie;
          x = yellowTilePath[yellowTilesPosition.yTile2][0];
          y = yellowTilePath[yellowTilesPosition.yTile2][1];
          addPosition(x, y, yellowTile2Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "yellowTile3") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          yellowTilesPosition.yTile3 = yellowTilesPosition.yTile3 + 1;
          x = yellowTilePath[yellowTilesPosition.yTile3][0];
          y = yellowTilePath[yellowTilesPosition.yTile3][1];
          addPosition(x, y, yellowTile3Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (yellowTilesPosition.yTile3 + selectedDie <= 56) {
          yellowTilesPosition.yTile3 = yellowTilesPosition.yTile3 + selectedDie;
          x = yellowTilePath[yellowTilesPosition.yTile3][0];
          y = yellowTilePath[yellowTilesPosition.yTile3][1];
          addPosition(x, y, yellowTile3Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "yellowTile4") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          yellowTilesPosition.yTile4 = yellowTilesPosition.yTile4 + 1;
          x = yellowTilePath[yellowTilesPosition.yTile4][0];
          y = yellowTilePath[yellowTilesPosition.yTile4][1];
          addPosition(x, y, yellowTile4Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (yellowTilesPosition.yTile4 + selectedDie <= 56) {
          yellowTilesPosition.yTile4 = yellowTilesPosition.yTile4 + selectedDie;
          x = yellowTilePath[yellowTilesPosition.yTile4][0];
          y = yellowTilePath[yellowTilesPosition.yTile4][1];
          addPosition(x, y, yellowTile4Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    }
  } else if (turn == "blue") {
    if (selectedTile == "blueTile1") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          blueTilesPosition.bTile1 = blueTilesPosition.bTile1 + 1;
          x = blueTilePath[blueTilesPosition.bTile1][0];
          y = blueTilePath[blueTilesPosition.bTile1][1];
          addPosition(x, y, blueTile1Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (blueTilesPosition.bTile1 + selectedDie <= 56) {
          blueTilesPosition.bTile1 = blueTilesPosition.bTile1 + selectedDie;
          x = blueTilePath[blueTilesPosition.bTile1][0];
          y = blueTilePath[blueTilesPosition.bTile1][1];
          addPosition(x, y, blueTile1Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "blueTile2") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          blueTilesPosition.bTile2 = blueTilesPosition.bTile2 + 1;
          x = blueTilePath[blueTilesPosition.bTile2][0];
          y = blueTilePath[blueTilesPosition.bTile2][1];
          addPosition(x, y, blueTile2Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (blueTilesPosition.bTile2 + selectedDie <= 56) {
          blueTilesPosition.bTile2 = blueTilesPosition.bTile2 + selectedDie;
          x = blueTilePath[blueTilesPosition.bTile2][0];
          y = blueTilePath[blueTilesPosition.bTile2][1];
          addPosition(x, y, blueTile2Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "blueTile3") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          blueTilesPosition.bTile3 = blueTilesPosition.bTile3 + 1;
          x = blueTilePath[blueTilesPosition.bTile3][0];
          y = blueTilePath[blueTilesPosition.bTile3][1];
          addPosition(x, y, blueTile3Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (blueTilesPosition.bTile3 + selectedDie <= 56) {
          blueTilesPosition.bTile3 = blueTilesPosition.bTile3 + selectedDie;
          x = blueTilePath[blueTilesPosition.bTile3][0];
          y = blueTilePath[blueTilesPosition.bTile3][1];
          addPosition(x, y, blueTile3Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    } else if (selectedTile == "blueTile4") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          blueTilesPosition.bTile4 = blueTilesPosition.bTile4 + 1;
          x = blueTilePath[blueTilesPosition.bTile4][0];
          y = blueTilePath[blueTilesPosition.bTile4][1];
          addPosition(x, y, blueTile4Positions);
        } else {
          alert("choose another die");
        }
      } else {
        if (blueTilesPosition.bTile4 + selectedDie <= 56) {
          blueTilesPosition.bTile4 = blueTilesPosition.bTile4 + selectedDie;
          x = blueTilePath[blueTilesPosition.bTile4][0];
          y = blueTilePath[blueTilesPosition.bTile4][1];
          addPosition(x, y, blueTile4Positions);
        } else {
          alert("Invalid Move. Choose another die or piece");
        }
      }
    }
  }
}

//checks if player can start
function checkIfPlayerCanStart(dice) {
  if (dice[0] == 6 || dice[1] == 6) {
    return true;
  } else {
    return false;
  }
}

//checks if player can play again
function canPlayerPlayAgain(rollDie) {
  if (rollDie[0] == 6 || rollDie[1] == 6) {
    return true;
  } else {
    return false;
  }
}

//checks if currently played position if occupied by red
function occupiedByRed(currentlyPlayedTilePosition) {
  if (currentlyPlayedTilePosition == redTilesPosition.rTile1) {
    removePositions(redTile1Positions);
    redTilesPosition.rTile1 = -1;
    return true;
  } else if (currentlyPlayedTilePosition == redTilesPosition.rTile2) {
    removePositions(redTile2Positions);
    redTilesPosition.rTile2 = -1;
    return true;
  } else if (currentlyPlayedTilePosition == redTilesPosition.rTile3) {
    removePositions(redTile3Positions);
    redTilesPosition.rTile3 = -1;
    return true;
  } else if (currentlyPlayedTilePosition == redTilesPosition.rTile4) {
    removePositions(redTile4Positions);
    redTilesPosition.rTile4 = -1;
    return true;
  } else {
    return false;
  }
}

//checks if currently played position if occupied by yellow
function occupiedByYellow(currentlyPlayedTilePosition) {
  if (currentlyPlayedTilePosition == yellowTilesPosition.yTile1) {
    removePositions(yellowTile1Positions);
    yellowTilesPosition.yTile1 = -1;
    return true;
  } else if (currentlyPlayedTilePosition == yellowTilesPosition.yTile2) {
    removePositions(yellowTile2Positions);
    yellowTilesPosition.yTile2 = -1;
    return true;
  } else if (currentlyPlayedTilePosition == yellowTilesPosition.yTile3) {
    removePositions(yellowTile3Positions);
    yellowTilesPosition.yTile3 = -1;
    return true;
  } else if (currentlyPlayedTilePlayPosition == yellowTilesPosition.yTile4) {
    removePositions(yellowTile4Positions);
    yellowTilesPosition.yTile4 = -1;
    return true;
  } else {
    return false;
  }
}

//checks if currently played position if occupied by green
function occupiedByGreen(currentlyPlayedTilePosition) {
  if (currentlyPlayedTilePosition == greenTilesPosition.gTile1) {
    removePositions(greenTile1Positions);
    greenTilesPosition.gTile1 = -1;
    return true;
  } else if (currentlyPlayedTilePosition == greenTilesPosition.gTile2) {
    removePositions(greenTile2Positions);
    greenTilesPosition.gTile2 = -1;
    return true;
  } else if (currentlyPlayedTilePosition == greenTilesPosition.gTile3) {
    removePositions(greenTile3Positions);
    greenTilesPosition.gTile3 = -1;
    return true;
  } else if (currentlyPlayedTilePlayPosition == greenTilesPosition.gTile4) {
    removePositions(greenTile4Positions);
    greenTilesPosition.gTile4 = -1;
    return true;
  } else {
    return false;
  }
}

//checks if currently played position if occupied by blue
function occupiedByBlue(currentlyPlayedTilePosition) {
  if (currentlyPlayedTilePosition == blueTilesPosition.bTile1) {
    removePositions(blueTile1Positions);
    blueTilesPosition.bTile1 = -1;
    return true;
  } else if (currentlyPlayedTilePosition == blueTilesPosition.bTile2) {
    removePositions(blueTile2Positions);
    blueTilesPosition.bTile2 = -1;
    return true;
  } else if (currentlyPlayedTilePosition == blueTilesPosition.bTile3) {
    removePositions(blueTile3Positions);
    blueTilesPosition.bTile3 = -1;
    return true;
  } else if (currentlyPlayedTilePlayPosition == blueTilesPosition.bTile4) {
    removePositions(blueTile4Positions);
    blueTilesPosition.bTile4 = -1;
    return true;
  } else {
    return false;
  }
}

//responsible for the capturing procedure of the game after checking if the currently played position is occupied by another coloured piece
function capture(currentlyPlayedTilePosition, currentlyPlayedTile) {
  if (currentlyPlayedTile == "redTile") {
    if (occupiedByBlue(currentlyPlayedTilePosition) == true) {
      return;
    } else if (occupiedByGreen(currentlyPlayedTilePosition) == true) {
      return;
    } else if (occupiedByYellow(currentlyPlayedTilePosition) == true) {
      return;
    } else {
      return;
    }
  } else if (currentlyPlayedTile == "blueTile") {
    if (occupiedByRed(currentlyPlayedTilePosition) == true) {
      return;
    } else if (occupiedByGreen(currentlyPlayedTilePosition) == true) {
      return;
    } else if (occupiedByYellow(currentlyPlayedTilePosition) == true) {
      return;
    } else {
      return;
    }
  } else if (currentlyPlayedTile == "yellowTile") {
    if (occupiedByBlue(currentlyPlayedTilePosition) == true) {
      return;
    } else if (occupiedByGreen(currentlyPlayedTilePosition) == true) {
      return;
    } else if (occupiedByRed(currentlyPlayedTilePosition) == true) {
      return;
    } else {
      return;
    }
  } else if (currentlyPlayedTile == "greenTile") {
    if (occupiedByBlue(currentlyPlayedTilePosition) == true) {
      return;
    } else if (occupiedByRed(currentlyPlayedTilePosition) == true) {
      return;
    } else if (occupiedByYellow(currentlyPlayedTilePosition) == true) {
      return;
    } else {
      return;
    }
  }
}


//determines the winner of the game- number of pieces that have landed in the base
function determineWinner() {
  var winner = "none";
  if (redTilesPosition.rTile1 == 56 && redTilesPosition.rTile2 == 56 && redTilesPosition.rTile3 == 56 && redTilesPosition.rTile4 == 56) {
    winner = "red";
    document.getElementById('winner').innerHTML.concat(" is RED");
  } else if (yellowTilesPosition.yTile1 == 56 && yellowTilesPosition.yTile2 == 56 && yellowTilesPosition.yTile3 == 56 && yellowTilesPosition.yTile4 == 56) {
    winner = "yellow";
    document.getElementById('winner').innerHTML.concat(" is YELLOW");
  } else if (greenTilesPosition.gTile1 == 56 && greenTilesPosition.gTile2 == 56 && greenTilesPosition.gTile3 == 56 && greenTilesPosition.gTile4 == 56) {
    winner = "green";
    document.getElementById('winner').innerHTML.concat(" is GREEN");
  } else if (blueTilesPosition.bTile1 == 56 && blueTilesPosition.bTile2 == 56 && blueTilesPosition.bTile3 == 56 && blueTilesPosition.bTile4 == 56) {
    winner = "blue";
    document.getElementById('winner').innerHTML.concat(" is BLUE");

  }
  return winner;
}

function selectedTile(event) {
  const pos = {
    x: event.clientX,
    y: event.clientY
  };
  var selectedTile = "none";
  if (tile(pos, greenTile1Positions)) {
    selectedTile = "greenTile1";
  } else if (tile(pos, greenTile2Positions)) {
    selectedTile = "greenTile2";
  } else if (tile(pos, greenTile3Positions)) {
    selectedTile = "greenTile3";
  } else if (tile(pos, greenTile4Positions)) {
    selectedTile = "greenTile4";
  } else if (tile(pos, redTile1Positions)) {
    selectedTile = "redTile1";
  } else if (tile(pos, redTile2Positions)) {
    selectedTile = "redTile2";
  } else if (tile(pos, redTile3Positions)) {
    selectedTile = "redTile3";
  } else if (tile(pos, redTile4Positions)) {
    selectedTile = "redTile4";
  } else if (tile(pos, yellowTile1Positions)) {
    selectedTile = "yellowTile1";
  } else if (tile(pos, yellowTile2Positions)) {
    selectedTile = "yellowTile2";
  } else if (tile(pos, yellowTile3Positions)) {
    selectedTile = "yellowTile3";
  } else if (tile(pos, yellowTile4Positions)) {
    selectedTile = "yellowTile4";
  } else if (tile(pos, blueTile1Positions)) {
    selectedTile = "blueTile1";
  } else if (tile(pos, blueTile2Positions)) {
    selectedTile = "blueTile2";
  } else if (tile(pos, blueTile3Positions)) {
    selectedTile = "blueTile3";
  } else if (tile(pos, blueTile4Positions)) {
    selectedTile = "blueTile4";
  }
  return selectedTile;
}

function selectedDie1(turn, selectedTile, diceValue,tilePosition,tileColour) {
  document.getElementById('die1').removeEventListener("click", selectedDie1, false);

  tileMove(turn, selectedTile, diceValue[0], tilePosition);
  capture(tilePosition, tileColour);

  document.getElementById('die1').style.border = "none";

  return true;
}

function selectedDie2(turn, selectedTile, diceValue,tilePosition,tileColour) {
  document.getElementById('die2').removeEventListener("click", selectedDie2, false);

  tileMove(turn, selectedTile, diceValue[1], tilePosition);
  capture(tilePosition, tileColour);

  document.getElementById('die2').style.border = "none";

  return true;
}

var chosenDie1;
var chosenDie2;
var played;
function selectedTileMoveCheckAtBase(turn, selectedTile,die1Played,die2Played,diceValue,tilePosition,tileColour) {
  if (die1Played == false && die2Played == false) {
    if (diceValue[0] == 6) {
      if (turn=="red") {
        document.getElementById('die1').style.border = "thick solid red";
      } else if (turn=="green") {
        document.getElementById('die1').style.border = "thick solid green";
      } else if (turn=="yellow") {
        document.getElementById('die1').style.border = "thick solid yellow";
      } else if (turn=="blue") {
        document.getElementById('die1').style.border = "thick solid blue";
      }


      document.getElementById('die1').addEventListener("click", selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour), false);

      die1Played = true;
    } else if (diceValue[1] == 6) {
      if (turn=="red") {
        document.getElementById('die2').style.border = "thick solid red";
      } else if (turn=="green") {
        document.getElementById('die2').style.border = "thick solid green";
      } else if (turn=="yellow") {
        document.getElementById('die2').style.border = "thick solid yellow";
      } else if (turn=="blue") {
        document.getElementById('die2').style.border = "thick solid blue";
      }

      document.getElementById('die2').addEventListener("click", selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour), false);

      die2Played = true;
    }
  } else if (die1Played == false && die2Played == true) {
    if (diceValue[0] == 6) {
      if (turn=="red") {
        document.getElementById('die1').style.border = "thick solid red";
      } else if (turn=="green") {
        document.getElementById('die1').style.border = "thick solid green";
      } else if (turn=="yellow") {
        document.getElementById('die1').style.border = "thick solid yellow";
      } else if (turn=="blue") {
        document.getElementById('die1').style.border = "thick solid blue";
      }

      document.getElementById('die1').addEventListener("click", selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour), false);

      die1Played = true;
    } else {
      alert("Choose another piece");
    }
  } else if (die1Played == true && die2Played == false) {
    if (diceValue[1] == 6) {
      if (turn=="red") {
        document.getElementById('die2').style.border = "thick solid red";
      } else if (turn=="green") {
        document.getElementById('die2').style.border = "thick solid green";
      } else if (turn=="yellow") {
        document.getElementById('die2').style.border = "thick solid yellow";
      } else if (turn=="blue") {
        document.getElementById('die2').style.border = "thick solid blue";
      }

      document.getElementById('die2').addEventListener("click", selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour), false);

      die2Played = true;
    } else {
      alert("Choose another piece");
    }
  }
  played=[die1Played,die2Played];
  return played;
}

function selectedTileMoveCheckOutsideBase(turn, selectedTile,die1Played,die2Played,diceValue,tilePosition,tileColour) {
  if (die1Played == false && die2Played == false) {
    if (turn=="red") {
      document.getElementById('die1').style.border = "thick solid red";
      document.getElementById('die2').style.border = "thick solid red";
    } else if (turn=="green") {
      document.getElementById('die1').style.border = "thick solid green";
      document.getElementById('die2').style.border = "thick solid green";
    } else if (turn=="yellow") {
      document.getElementById('die1').style.border = "thick solid yellow";
      document.getElementById('die2').style.border = "thick solid yellow";
    } else if (tileColour=="blue") {
      document.getElementById('die1').style.border = "thick solid blue";
      document.getElementById('die2').style.border = "thick solid blue";
    }


    document.getElementById('die1').addEventListener("click", function () {
      chosenDie1=selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour);
    }, false);
    document.getElementById('die2').addEventListener("click", function () {
      chosenDie2=selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour);
    }, false);

    if (chosenDie1==true) {
      die1Played=true;
    } else if (chosenDie2==true) {
      die2Played=true;
    }

  } else if (die1Played == false && die2Played == true) {
    if (turn=="red") {
      document.getElementById('die1').style.border = "thick solid red";
    } else if (turn=="green") {
      document.getElementById('die1').style.border = "thick solid green";
    } else if (turn=="yellow") {
      document.getElementById('die1').style.border = "thick solid yellow";
    } else if (turn=="blue") {
      document.getElementById('die1').style.border = "thick solid blue";
    }
    document.getElementById('die1').addEventListener("click", selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour), false);

    die1Played=true;

  } else if (die1Played == true && die2Played == false) {
    if (turn=="red") {
      document.getElementById('die2').style.border = "thick solid red";
    } else if (turn=="green") {
      document.getElementById('die2').style.border = "thick solid green";
    } else if (turn=="yellow") {
      document.getElementById('die2').style.border = "thick solid yellow";
    } else if (turn=="blue") {
      document.getElementById('die2').style.border = "thick solid blue";
    }
    document.getElementById('die2').addEventListener("click", selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour), false);

    die2Played=true;
  }
  played=[die1Played,die2Played];
  return played;
}

function selectedTileMoveCheckOutsideOfBase(turn, selectedTile,die1Played,die2Played,diceValue,tilePosition,tileColour) {
  if (die1Played == false && die2Played == false) {
    if (tilePosition + diceValue[0] <= 56 && tilePosition + diceValue[1] <= 56) {
      if (turn=="red") {
        document.getElementById('die1').style.border = "thick solid red";
        document.getElementById('die2').style.border = "thick solid red";
      } else if (turn=="green") {
        document.getElementById('die1').style.border = "thick solid green";
        document.getElementById('die2').style.border = "thick solid green";
      } else if (turn=="yellow") {
        document.getElementById('die1').style.border = "thick solid yellow";
        document.getElementById('die2').style.border = "thick solid yellow";
      } else if (tileColour=="blue") {
        document.getElementById('die1').style.border = "thick solid blue";
        document.getElementById('die2').style.border = "thick solid blue";
      }

      document.getElementById('die1').addEventListener("click", function () {
        chosenDie1=selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour);
      }, false);
      document.getElementById('die2').addEventListener("click", function () {
        chosenDie2=selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour);
      }, false);

      if (chosenDie1 == true) {
        die1Played = true;
      } else if (chosenDie2 == true) {
        die2Played = true;
      }
    } else if (tilePosition + diceValue[0] <= 56 && tilePosition + diceValue[1] > 56) {
      if (turn=="red") {
        document.getElementById('die1').style.border = "thick solid red";
      } else if (turn=="green") {
        document.getElementById('die1').style.border = "thick solid green";
      } else if (turn=="yellow") {
        document.getElementById('die1').style.border = "thick solid yellow";
      } else if (turn=="blue") {
        document.getElementById('die1').style.border = "thick solid blue";
      }

      document.getElementById('die1').addEventListener("click", selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour), false);

      die1Played = true;

    } else if (tilePosition + diceValue[0] > 56 && tilePosition + diceValue[1] <= 56) {
      if (turn=="red") {
        document.getElementById('die2').style.border = "thick solid red";
      } else if (turn=="green") {
        document.getElementById('die2').style.border = "thick solid green";
      } else if (turn=="yellow") {
        document.getElementById('die2').style.border = "thick solid yellow";
      } else if (turn=="blue") {
        document.getElementById('die2').style.border = "thick solid blue";
      }

      document.getElementById('die2').addEventListener("click", selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour), false);

      die2Played = true;
    } else if (tilePosition + diceValue[0] > 56 && tilePosition + diceValue[1] > 56) {
      alert("No possible moves for this piece. Choose another piece");
    }

  } else if (die1Played == false && die2Played == true) {
    if (tilePosition + diceValue[0] <= 56) {
      if (turn=="red") {
        document.getElementById('die1').style.border = "thick solid red";
      } else if (turn=="green") {
        document.getElementById('die1').style.border = "thick solid green";
      } else if (turn=="yellow") {
        document.getElementById('die1').style.border = "thick solid yellow";
      } else if (turn=="blue") {
        document.getElementById('die1').style.border = "thick solid blue";
      }
      document.getElementById('die1').addEventListener("click", selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour), false);

      die1Played = true;
    } else {
      alert("No possible moves for this piece. Choose another piece");
    }
  } else if (die1Played == true && die2Played == false) {
    if (tilePosition + diceValue[1] <= 56) {
      if (turn=="red") {
        document.getElementById('die2').style.border = "thick solid red";
      } else if (turn=="green") {
        document.getElementById('die2').style.border = "thick solid green";
      } else if (turn=="yellow") {
        document.getElementById('die2').style.border = "thick solid yellow";
      } else if (turn=="blue") {
        document.getElementById('die2').style.border = "thick solid blue";
      }
      document.getElementById('die2').addEventListener("click", selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour), false);

      die2Played = true;
    } else {
      alert("No possible moves for this piece. Choose another piece");
    }
  }
  played=[die1Played,die2Played];
  return played;
}

//enables the game
function theGame() {
  var winner = determineWinner();
  var diceValue;
  var turn = red;
  var playedCheck;
  var playAgain = false;
  var playAgainCounter = 0;
  var die1Played = false;
  var die2Played = false;
  var selectedPiece;
  var selectedDie;

  document.getElementById('menu').style.visibility = "hidden";
  document.getElementById('ludo_game').style.visibility = 'visible';
  document.getElementById('rTile').style.visibility = 'visible';
  // $('.rTile').css('visibility','visible');
  while (winner != "red" && winner != "green" && winner != "yellow" && winner != "blue") {
    if (turn == "red") {

      document.getElementById('diceRoll').addEventListener("click", function () {
        diceValue = rollDice();
      }, false);



      if (redTilesPosition.rTile1 == -1 && redTilesPosition.rTile2 == -1 && redTilesPosition.rTile3 == -1 && redTilesPosition.rTile4 == -1) {
        if (checkIfPlayerCanStart(diceValue) == true) {
          canvas.addEventListener('click', function (event) {
            selectedPiece=selectedTile(event);
          }, false);

          while (die1Played == false && die2Played == false) {
            if (selectedPiece == "redTile1") {
              if (redTilesPosition.rTile1 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile1,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (redTilesPosition.rTile1 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile1,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "redTile2") {
              if (redTilesPosition.rTile2 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile2,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (redTilesPosition.rTile2 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile2,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "redTile3") {
              if (redTilesPosition.rTile3 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile3,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (redTilesPosition.rTile3 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile3,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "redTile4") {
              if (redTilesPosition.rTile4 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile4,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (redTilesPosition.rTile4 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile4,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            }
          }


        } else {
          turn = "green";
          document.getElementById('rTile').style.visibility = 'hidden';
          document.getElementById('gTile').style.visibility = 'visible';
        }

      } else if (redTilesPosition.rTile1 == -1 || redTilesPosition.rTile2 == -1 || redTilesPosition.rTile3 == -1 || redTilesPosition.rTile4 == -1) {
        canvas.addEventListener('click', function (event) {
          selectedPiece=selectedTile(event);
        }, false);

        while (die1Played == false && die2Played == false) {
          if (selectedPiece == "redTile1") {
            if (redTilesPosition.rTile1 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile1,"redTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (redTilesPosition.rTile1 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile1,"redTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "redTile2") {
            if (redTilesPosition.rTile2 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile2,"redTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (redTilesPosition.rTile2 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile2,"redTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "redTile3") {
            if (redTilesPosition.rTile3 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile3,"redTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (redTilesPosition.rTile3 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile3,"redTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "redTile4") {
            if (redTilesPosition.rTile4 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile4,"redTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (redTilesPosition.rTile4 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile4,"redTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          }
        }

        if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
          turn = "red";
          playAgainCounter++;
        } else {
          turn = "green";
          document.getElementById('rTile').style.visibility = 'hidden';
          document.getElementById('gTile').style.visibility = 'visible';
        }

      } else {
        canvas.addEventListener('click', function (event) {
          selectedPiece=selectedTile(event);
        }, false);

        while (die1Played == false && die2Played == false) {
          if (redTilesPosition.rTile1 + diceValue[0] > 56 && redTilesPosition.rTile2 + diceValue[0] > 56 && redTilesPosition.rTile3 + diceValue[0] > 56 && redTilesPosition.rTile4 + diceValue[0] > 56 && redTilesPosition.rTile1 + diceValue[1] > 56 && redTilesPosition.rTile2 + diceValue[1] > 56 && redTilesPosition.rTile3 + diceValue[1] > 56 && redTilesPosition.rTile4 + diceValue[1] > 56) {
            die1Played==true;
            die2Played==true;
          } else {
            if (selectedPiece == "redTile1") {
              if (redTilesPosition.rTile1 + diceValue[0] > 56 && redTilesPosition.rTile1 + diceValue[1] > 56){
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile1,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "redTile2") {
              if (redTilesPosition.rTile2 + diceValue[0] > 56 && redTilesPosition.rTile2 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile2,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "redTile3") {
              if (redTilesPosition.rTile3 + diceValue[0] > 56 && redTilesPosition.rTile3 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile3,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "redTile4") {
              if (redTilesPosition.rTile4 + diceValue[0] > 56 && redTilesPosition.rTile4 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else {
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,redTilesPosition.rTile4,"redTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            }
          }
        }

        if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
          turn = "red";
          playAgainCounter++;
        } else {
          turn = "green";
          document.getElementById('rTile').style.visibility = 'hidden';
          document.getElementById('gTile').style.visibility = 'visible';
        }

        winner = determineWinner();
      }
    } else if (turn == "green") {
      document.getElementById('diceRoll').addEventListener("click", function () {
        diceValue = rollDice();
      }, false);



      if (greenTilesPosition.gTile1 == -1 && greenTilesPosition.gTile2 == -1 && greenTilesPosition.gTile3 == -1 && greenTilesPosition.gTile4 == -1) {
        if (checkIfPlayerCanStart(diceValue) == true) {
          canvas.addEventListener('click', function (event) {
            selectedPiece=selectedTile(event);
          }, false);

          while (die1Played == false && die2Played == false) {
            if (selectedPiece == "greenTile1") {
              if (greenTilesPosition.gTile1 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile1,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (greenTilesPosition.gTile1 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile1,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "greenTile2") {
              if (greenTilesPosition.gTile2 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile2,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (greenTilesPosition.gTile2 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile2,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "greenTile3") {
              if (greenTilesPosition.gTile3 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile3,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (greenTilesPosition.gTile3 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile3,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "greenTile4") {
              if (greenTilesPosition.gTile4 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile4,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (greenTilesPosition.gTile4 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile4,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            }
          }


        } else {
          turn = "yellow";
          document.getElementById('gTile').style.visibility = 'hidden';
          document.getElementById('yTile').style.visibility = 'visible';
        }

      } else if (greenTilesPosition.gTile1 == -1 || greenTilesPosition.gTile2 == -1 || greenTilesPosition.gTile3 == -1 || greenTilesPosition.gTile4 == -1) {
        canvas.addEventListener('click', function (event) {
          selectedPiece=selectedTile(event);
        }, false);

        while (die1Played == false && die2Played == false) {
          if (selectedPiece == "greenTile1") {
            if (greenTilesPosition.gTile1 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile1,"greenTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (greenTilesPosition.gTile1 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile1,"greenTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "greenTile2") {
            if (greenTilesPosition.gTile2 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile2,"greenTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (greenTilesPosition.gTile2 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile2,"greenTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "greenTile3") {
            if (greenTilesPosition.gTile3 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile3,"greenTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (greenTilesPosition.gTile3 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile3,"greenTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "greenTile4") {
            if (greenTilesPosition.gTile4 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile4,"greenTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (greenTilesPosition.gTile4 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile4,"greenTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          }
        }

        if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
          turn = "green";
          playAgainCounter++;
        } else {
          turn = "yellow";
          document.getElementById('gTile').style.visibility = 'hidden';
          document.getElementById('yTile').style.visibility = 'visible';
        }

      } else {
        canvas.addEventListener('click', function (event) {
          selectedPiece=selectedTile(event);
        }, false);

        while (die1Played == false && die2Played == false) {
          if (greenTilesPosition.gTile1 + diceValue[0] > 56 && greenTilesPosition.gTile2 + diceValue[0] > 56 && greenTilesPosition.gTile3 + diceValue[0] > 56 && greenTilesPosition.gTile4 + diceValue[0] > 56 && greenTilesPosition.gTile1 + diceValue[1] > 56 && greenTilesPosition.gTile2 + diceValue[1] > 56 && greenTilesPosition.gTile3 + diceValue[1] > 56 && greenTilesPosition.gTile4 + diceValue[1] > 56) {
            die1Played==true;
            die2Played==true;
          } else {
            if (selectedPiece == "greenTile1") {
              if (greenTilesPosition.gTile1 + diceValue[0] > 56 && greenTilesPosition.gTile1 + diceValue[1] > 56){
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile1,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "greenTile2") {
              if (greenTilesPosition.gTile2 + diceValue[0] > 56 && greenTilesPosition.gTile2 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile2,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "greenTile3") {
              if (greenTilesPosition.gTile3 + diceValue[0] > 56 && greenTilesPosition.gTile3 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile3,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "greenTile4") {
              if (greenTilesPosition.gTile4 + diceValue[0] > 56 && greenTilesPosition.gTile4 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else {
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,greenTilesPosition.gTile4,"greenTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            }
          }
        }

        if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
          turn = "green";
          playAgainCounter++;
        } else {
          turn = "yellow";
          document.getElementById('gTile').style.visibility = 'hidden';
          document.getElementById('yTile').style.visibility = 'visible';
        }

        winner = determineWinner();
      }
    } else if (turn == "yellow") {
      document.getElementById('diceRoll').addEventListener("click", function () {
        diceValue = rollDice();
      }, false);



      if (yellowTilesPosition.yTile1 == -1 && yellowTilesPosition.yTile2 == -1 && yellowTilesPosition.yTile3 == -1 && yellowTilesPosition.yTile4 == -1) {
        if (checkIfPlayerCanStart(diceValue) == true) {
          canvas.addEventListener('click', function (event) {
            selectedPiece=selectedTile(event);
          }, false);

          while (die1Played == false && die2Played == false) {
            if (selectedPiece == "yellowTile1") {
              if (yellowTilesPosition.yTile1 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile1,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (yellowTilesPosition.yTile1 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile1,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "yellowTile2") {
              if (yellowTilesPosition.yTile2 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile2,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (yellowTilesPosition.yTile2 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile2,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "yellowTile3") {
              if (yellowTilesPosition.yTile3 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile3,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (yellowTilesPosition.yTile3 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile3,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "yellowTile4") {
              if (yellowTilesPosition.yTile4 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile4,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (yellowTilesPosition.yTile4 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile4,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            }
          }


        } else {
          turn = "blue";
          document.getElementById('yTile').style.visibility = 'hidden';
          document.getElementById('bTile').style.visibility = 'visible';
        }

      } else if (yellowTilesPosition.yTile1 == -1 || yellowTilesPosition.yTile2 == -1 || yellowTilesPosition.yTile3 == -1 || yellowTilesPosition.yTile4 == -1) {
        canvas.addEventListener('click', function (event) {
          selectedPiece=selectedTile(event);
        }, false);

        while (die1Played == false && die2Played == false) {
          if (selectedPiece == "yellowTile1") {
            if (yellowTilesPosition.yTile1 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile1,"yellowTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (yellowTilesPosition.yTile1 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile1,"yellowTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "yellowTile2") {
            if (yellowTilesPosition.yTile2 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile2,"yellowTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (yellowTilesPosition.yTile2 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile2,"yellowTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "yellowTile3") {
            if (yellowTilesPosition.yTile3 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile3,"yellowTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (yellowTilesPosition.yTile3 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile3,"yellowTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "yellowTile4") {
            if (yellowTilesPosition.yTile4 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile4,"yellowTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (yellowTilesPosition.yTile4 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile4,"yellowTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          }
        }

        if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
          turn = "yellow";
          playAgainCounter++;
        } else {
          turn = "blue";
          document.getElementById('yTile').style.visibility = 'hidden';
          document.getElementById('bTile').style.visibility = 'visible';
        }

      } else {
        canvas.addEventListener('click', function (event) {
          selectedPiece=selectedTile(event);
        }, false);

        while (die1Played == false && die2Played == false) {
          if (yellowTilesPosition.yTile1 + diceValue[0] > 56 && yellowTilesPosition.yTile2 + diceValue[0] > 56 && yellowTilesPosition.yTile3 + diceValue[0] > 56 && yellowTilesPosition.yTile4 + diceValue[0] > 56 && yellowTilesPosition.yTile1 + diceValue[1] > 56 && yellowTilesPosition.yTile2 + diceValue[1] > 56 && yellowTilesPosition.yTile3 + diceValue[1] > 56 && yellowTilesPosition.yTile4 + diceValue[1] > 56) {
            die1Played==true;
            die2Played==true;
          } else {
            if (selectedPiece == "yellowTile1") {
              if (yellowTilesPosition.yTile1 + diceValue[0] > 56 && yellowTilesPosition.yTile1 + diceValue[1] > 56){
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile1,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "yellowTile2") {
              if (yellowTilesPosition.yTile2 + diceValue[0] > 56 && yellowTilesPosition.yTile2 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile2,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "yellowTile3") {
              if (yellowTilesPosition.yTile3 + diceValue[0] > 56 && yellowTilesPosition.yTile3 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile3,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "yellowTile4") {
              if (yellowTilesPosition.yTile4 + diceValue[0] > 56 && yellowTilesPosition.yTile4 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else {
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,yellowTilesPosition.yTile4,"yellowTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            }
          }
        }

        if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
          turn = "yellow";
          playAgainCounter++;
        } else {
          turn = "blue";
          document.getElementById('yTile').style.visibility = 'hidden';
          document.getElementById('bTile').style.visibility = 'visible';
        }

        winner = determineWinner();
      }
    } else if (turn == "blue") {
      document.getElementById('diceRoll').addEventListener("click", function () {
        diceValue = rollDice();
      }, false);



      if (blueTilesPosition.bTile1 == -1 && blueTilesPosition.bTile2 == -1 && blueTilesPosition.bTile3 == -1 && blueTilesPosition.bTile4 == -1) {
        if (checkIfPlayerCanStart(diceValue) == true) {
          canvas.addEventListener('click', function (event) {
            selectedPiece=selectedTile(event);
          }, false);

          while (die1Played == false && die2Played == false) {
            if (selectedPiece == "blueTile1") {
              if (blueTilesPosition.bTile1 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile1,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (blueTilesPosition.bTile1 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile1,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "blueTile2") {
              if (blueTilesPosition.bTile2 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile2,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (blueTilesPosition.bTile2 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile2,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "blueTile3") {
              if (blueTilesPosition.bTile3 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile3,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (blueTilesPosition.bTile3 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile3,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "blueTile4") {
              if (blueTilesPosition.bTile4 == -1) {
                playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile4,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              } else if (blueTilesPosition.bTile4 != -1) {
                playedCheck=selectedTileMoveCheckOutsideBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile4,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            }
          }


        } else {
          turn = "red";
          document.getElementById('bTile').style.visibility = 'hidden';
          document.getElementById('rTile').style.visibility = 'visible';
        }

      } else if (blueTilesPosition.bTile1 == -1 || blueTilesPosition.bTile2 == -1 || blueTilesPosition.bTile3 == -1 || blueTilesPosition.bTile4 == -1) {
        canvas.addEventListener('click', function (event) {
          selectedPiece=selectedTile(event);
        }, false);

        while (die1Played == false && die2Played == false) {
          if (selectedPiece == "blueTile1") {
            if (blueTilesPosition.bTile1 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile1,"blueTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (blueTilesPosition.bTile1 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile1,"blueTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "blueTile2") {
            if (blueTilesPosition.bTile2 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile2,"blueTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (blueTilesPosition.bTile2 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile2,"blueTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "blueTile3") {
            if (blueTilesPosition.bTile3 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile3,"blueTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (blueTilesPosition.bTile3 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile3,"blueTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          } else if (selectedPiece == "blueTile4") {
            if (blueTilesPosition.bTile4 == -1) {
              playedCheck=selectedTileMoveCheckAtBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile4,"blueTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            } else if (blueTilesPosition.bTile4 != -1) {
              playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile4,"blueTile");
              if (playedCheck[0]==true) {
                die1Played=playedCheck[0];
              } else if (playedCheck[1]==true) {
                die2Played=playedCheck[1];
              }
            }
          }
        }

        if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
          turn = "blue";
          playAgainCounter++;
        } else {
          turn = "red";
          document.getElementById('bTile').style.visibility = 'hidden';
          document.getElementById('rTile').style.visibility = 'visible';
        }

      } else {
        canvas.addEventListener('click', function (event) {
          selectedPiece=selectedTile(event);
        }, false);

        while (die1Played == false && die2Played == false) {
          if (blueTilesPosition.bTile1 + diceValue[0] > 56 && blueTilesPosition.bTile2 + diceValue[0] > 56 && blueTilesPosition.bTile3 + diceValue[0] > 56 && blueTilesPosition.bTile4 + diceValue[0] > 56 && blueTilesPosition.bTile1 + diceValue[1] > 56 && blueTilesPosition.bTile2 + diceValue[1] > 56 && blueTilesPosition.bTile3 + diceValue[1] > 56 && blueTilesPosition.bTile4 + diceValue[1] > 56) {
            die1Played==true;
            die2Played==true;
          } else {
            if (selectedPiece == "blueTile1") {
              if (blueTilesPosition.bTile1 + diceValue[0] > 56 && blueTilesPosition.bTile1 + diceValue[1] > 56){
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile1,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "blueTile2") {
              if (blueTilesPosition.bTile2 + diceValue[0] > 56 && blueTilesPosition.bTile2 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile2,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "blueTile3") {
              if (blueTilesPosition.bTile3 + diceValue[0] > 56 && blueTilesPosition.bTile3 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else{
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile3,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            } else if (selectedPiece == "blueTile4") {
              if (blueTilesPosition.bTile4 + diceValue[0] > 56 && blueTilesPosition.bTile4 + diceValue[1] > 56) {
                alert("Choose another piece");
              }else {
                playedCheck=selectedTileMoveCheckOutsideOfBase(turn, selectedPiece,die1Played,die2Played,diceValue,blueTilesPosition.bTile4,"blueTile");
                if (playedCheck[0]==true) {
                  die1Played=playedCheck[0];
                } else if (playedCheck[1]==true) {
                  die2Played=playedCheck[1];
                }
              }
            }
          }
        }

        if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
          turn = "blue";
          playAgainCounter++;
        } else {
          turn = "red";
          document.getElementById('bTile').style.visibility = 'hidden';
          document.getElementById('rTile').style.visibility = 'visible';
        }

        winner = determineWinner();
      }
    }
  }
  document.getElementById('winner').style.visibility = 'visible';
}
