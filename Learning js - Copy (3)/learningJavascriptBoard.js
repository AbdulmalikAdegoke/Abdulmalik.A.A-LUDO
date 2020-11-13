//the canvas initialisation
const canvas=document.getElementById('boardCanvas');
const ctx=canvas.getContext('2d');


//the paths for the pieces will take
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
//roll dice
function rollDice(){
  var diceValue,
  diceValue1=Math.floor((Math.random()*6) + 1),
  diceValue2=Math.floor((Math.random()*6) + 1);

  diceValue=[diceValue1,diceValue2];

  document.getElementById('die1').src='Images/'+ diceValue1 +'.jpg';
  document.getElementById('die2').src='Images/'+ diceValue2 +'.jpg';

  return diceValue;
}
//the function for the demo button
function displayInstructions() {
  document.getElementById('menu').style.visibility="hidden";
  document.getElementById('instructions').style.visibility='visible';
}
//the function for the demo button
// displays the demo of the game
function displayDemo() {
  document.getElementById('menu').style.visibility="hidden";
  document.getElementById('demo').style.visibility='visible';
}
//the function for the saved games button
// displays the saved games
function displaySavedGames() {
  document.getElementById('menu').style.visibility="hidden";
  document.getElementById('saved_games').style.visibility='visible';
}
// the function for the main menu button
// returns from the current page to the main menu
function mainMenu(page) {
  document.getElementById('menu').style.visibility="visible";
  document.getElementById(page).style.visibility='hidden';
}
// the function for the save game button
// saves the current progress made on the game for later use
function saveGame() {

}
// the function for the exit game button
// returns from the game page to the main menu and resets the board to it's defaul state
function exitGame() {
  document.getElementById('menu').style.visibility="visible";
  document.getElementById('ludo_game').style.visibility='hidden';
}

//adds the new position for the tile
function addPosition(x,y,positionArray) {
  var position={x,y};
  positionArray.push(position);
}
//removes all the stored positions except for the default i.e. the position of the tile in the base the first index
function removePositions(positionArray) {
  while (positionArray.length!=1) {
    positionArray.pop();
  }
}
//calculates the current position of the tile
function currentPosition(positionArray) {
  var size=positionArray.length;
  return size-1;
}

//all the pieces position array initialisation:

//green tiles
//array of coordinates/ position objects to store postions the green tiles have been to
//with the default position (base) being the head
var greenTile1Positions = [{
  x: 87,
  y: 87
}];
var greenTile2Positions = [{
  x: 153,
  y: 87
}];
var greenTile3Positions = [{
  x: 87,
  y: 153
}];
var greenTile4Positions = [{
  x: 153,
  y: 153
}];

//red tiles
//array of coordinates/ position objects to store postions the red tiles have been to
//with the default position (base) being the head
var redTile1Positions = [{
  x: 87,
  y: 447
}];
var redTile2Positions = [{
  x: 87,
  y: 513
}];
var redTile3Positions = [{
  x: 153,
  y: 447
}];
var redTile4Positions = [{
  x: 153,
  y: 513
}];

//yellow tiles
//array of coordinates/ position objects to store postions the yellow tiles have been to
//with the default position (base) being the head
var yellowTile1Positions = [{
  x: 447,
  y: 87
}];
var yellowTile2Positions = [{
  x: 513,
  y: 87
}];
var yellowTile3Positions = [{
  x: 447,
  y: 153
}];
var yellowTile4Positions = [{
  x: 513,
  y: 153
}];

//blue tiles
//array of coordinates/ position objects to store postions the blue tiles have been to
//with the default position (base) being the head
var blueTile1Positions = [{
  x: 447,
  y: 447
}];
var blueTile2Positions = [{
  x: 447,
  y: 513
}];
var blueTile3Positions = [{
  x: 513,
  y: 447
}];
var blueTile4Positions = [{
  x: 513,
  y: 513
}];


//the board
var board=(function() {
  //green base
  var greenBase=(function() {
    ctx.fillStyle="green";
    ctx.fillRect(0,0,240,240);
    //white part
    ctx.fillStyle="white";
    ctx.fillRect(40,40,160,160);

    ctx.beginPath();
    ctx.arc(87,87,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(153,87,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(87,153,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(153,153,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
  }());

  //red base
  var redBase=(function() {
    ctx.fillStyle="red";
    ctx.fillRect(0,360,240,240);
    //white inner part
    ctx.fillStyle="white";
    ctx.fillRect(40,400,160,160);

    ctx.beginPath();
    ctx.arc(87,447,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(87,513,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(153,447,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(153,513,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
  }());

  //yellow base
  var yellowBase=(function() {
    ctx.fillStyle="yellow";
    ctx.fillRect(360,0,240,240);
    //white part
    ctx.fillStyle="white";
    ctx.fillRect(400,40,160,160);

    ctx.beginPath();
    ctx.arc(447,87,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(513,87,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(447,153,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(513,153,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
  }());

  //blue base
  var blueBase=(function() {
    ctx.fillStyle="blue";
    ctx.fillRect(360,360,240,240);
    //white part
    ctx.fillStyle="white";
    ctx.fillRect(400,400,160,160);

    //blue tiles
    ctx.beginPath();
    ctx.arc(447,447,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(447,513,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(513,447,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(513,513,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
  }());

  //the positions x and y for the tiles
  var positionx;
  var positiony;

  //top tile path
  var topTilePath=(function() {
    ctx.fillStyle="white";
    ctx.fillRect(240,0,120,240);
    //fill the path with rectangles
    positionx=240;
    for (var x = 0; x < 3; x++) {
      positiony=0;
      for (var y = 0; y < 6; y++) {
        if (x==1 && y>0) {
          ctx.fillStyle="yellow";
          ctx.fillRect(positionx,positiony,40,40);
          ctx.stroke();
        }else if (x==2 && y==1) {
          ctx.fillStyle="yellow";
          ctx.fillRect(positionx,positiony,40,40);
          ctx.stroke();
        }else {
          ctx.rect(positionx,positiony,40,40);
          ctx.stroke();
        }
        positiony+=40;
      }
      positionx+=40;
    }
  }());

  //middle tile path-left
  var middleTilePathLeft=(function() {
    ctx.fillStyle="white";
    ctx.fillRect(0,240,240,120);
    //fill the path with rectangles
    positionx=0;
    for (var x = 0; x < 6; x++) {
      positiony=240;
      for (var y = 0; y < 3; y++) {
        if (y==1 && x>0) {
          ctx.fillStyle="green";
          ctx.fillRect(positionx,positiony,40,40);
          ctx.stroke();
        }else if (x==1 && y==0) {
          ctx.fillStyle="green";
          ctx.fillRect(positionx,positiony,40,40);
          ctx.stroke();
        }else {
          ctx.rect(positionx,positiony,40,40);
          ctx.stroke();
        }
        positiony+=40;
      }
      positionx+=40;
    }
  }());

  //middle path- winner's spot
  //green home
  var greenHome=(function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(240,240);
    ctx.lineTo(240,360);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(260,300,10,0,2*Math.PI);
    ctx.stroke();
  }());

  //red home
  var redHome=(function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(240,360);
    ctx.lineTo(360,360);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300,340,10,0,2*Math.PI);
    ctx.stroke();
  }());

  //blue home
  var blueHome=(function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(360,240);
    ctx.lineTo(360,360);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(340,300,10,0,2*Math.PI);
    ctx.stroke();
  }());

  //yellow home
  var yellowHome=(function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(240,240);
    ctx.lineTo(360,240);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300,260,10,0,2*Math.PI);
    ctx.stroke();
  }());


  //middle tile path-right
  var middleTilePathRight=(function() {
    ctx.fillStyle="white";
    ctx.fillRect(360,240,240,120);
    //fill the path with rectangles
    positionx=360;
    for (var x = 0; x < 6; x++) {
      positiony=240;
      for (var y = 0; y < 3; y++) {
        if (y==1 && x<5) {
          ctx.fillStyle="blue";
          ctx.fillRect(positionx,positiony,40,40);
          ctx.stroke();
        }else if (x==4 && y==2) {
          ctx.fillStyle="blue";
          ctx.fillRect(positionx,positiony,40,40);
          ctx.stroke();
        }else {
          ctx.rect(positionx,positiony,40,40);
          ctx.stroke();
        }
        positiony+=40;
      }
      positionx+=40;
    }
  }());


  //bottom tile path
  var bottomTilePath=(function() {
    ctx.fillStyle="white";
    ctx.fillRect(240,360,120,240);
    //fill the path with rectangles
    positionx=240;
    for (var x = 0; x < 3; x++) {
      positiony=360;
      for (var y = 0; y < 6; y++) {
        if (x==1 && y<5) {
          ctx.fillStyle="red";
          ctx.fillRect(positionx,positiony,40,40);
          ctx.stroke();
        }else if (x==0 && y==4) {
          ctx.fillStyle="red";
          ctx.fillRect(positionx,positiony,40,40);
          ctx.stroke();
        }else {
          ctx.rect(positionx,positiony,40,40);
          ctx.stroke();
        }
        positiony+=40;
      }
      positionx+=40;
    }
  }());
}());



function tile(pos, tilePositions) {
  if (Math.pow(pos.x-tilePositions[currentPosition(tilePositions)].x,2)+Math.pow(pos.y-tilePositions[currentPosition(tilePositions)].y,2) < Math.pow(20,2)) {
    return true;
  } else {
    return false;
  }
}


function selectedTile(event) {

  const pos = {
    x: event.clientX,
    y: event.clientY
  };
  var selectedTile = "none";
  if (tile(pos, greenTile1Positions)) {
    selectedTile = "greenTile1";
    // alert(selectedTile);
  } else if (tile(pos, greenTile2Positions)) {
    selectedTile = "greenTile2";
    // alert(selectedTile);
  } else if (tile(pos, greenTile3Positions)) {
    selectedTile = "greenTile3";
    // alert(selectedTile);
  } else if (tile(pos, greenTile4Positions)) {
    selectedTile = "greenTile4";
    // alert(selectedTile);
  } else if (tile(pos, redTile1Positions)) {
    selectedTile = "redTile1";
    // alert(selectedTile);
  } else if (tile(pos, redTile2Positions)) {
    selectedTile = "redTile2";
    // alert(selectedTile);
  } else if (tile(pos, redTile3Positions)) {
    selectedTile = "redTile3";
    // alert(selectedTile);
  } else if (tile(pos, redTile4Positions)) {
    selectedTile = "redTile4";
    // alert(selectedTile);
  } else if (tile(pos, yellowTile1Positions)) {
    selectedTile = "yellowTile1";
    // alert(selectedTile);
  } else if (tile(pos, yellowTile2Positions)) {
    selectedTile = "yellowTile2";
    // alert(selectedTile);
  } else if (tile(pos, yellowTile3Positions)) {
    selectedTile = "yellowTile3";
    // alert(selectedTile);
  } else if (tile(pos, yellowTile4Positions)) {
    selectedTile = "yellowTile4";
    // alert(selectedTile);
  } else if (tile(pos, blueTile1Positions)) {
    selectedTile = "blueTile1";
    // alert(selectedTile);
  } else if (tile(pos, blueTile2Positions)) {
    selectedTile = "blueTile2";
    // alert(selectedTile);
  } else if (tile(pos, blueTile3Positions)) {
    selectedTile = "blueTile3";
    // alert(selectedTile);
  } else if (tile(pos, blueTile4Positions)) {
    selectedTile = "blueTile4";
    // alert(selectedTile);
  }
  return selectedTile;
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




var redMoveAtBase= function (selectedPiece,die1Played,die2Played,diceValue) {
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
}

var redMoveOutsideBase= function (selectedPiece,die1Played,die2Played,diceValue) {
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
}

var redMoveOutsideOfBase= function (selectedPiece,die1Played,die2Played,diceValue) {
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
}

var redTurn=function (diceValue) {
  var playAgain,
  playAgainCounter = 0;

  while (playAgain=true && playAgainCounter < 3) {

    var die1Played = false,
    die2Played = false;

    playAgain = false;
    if (redTilesPosition.rTile1 == -1 && redTilesPosition.rTile2 == -1 && redTilesPosition.rTile3 == -1 && redTilesPosition.rTile4 == -1) {
      if (checkIfPlayerCanStart(diceValue) == true) {
        canvas.addEventListener('click', function (event) {
          selectedPiece=selectedTile(event);
          redMoveAtBase(selectedPiece,die1Played,die2Played,diceValue);
        }, false);

        if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
          playAgain=true;
          playAgainCounter++;
        } else {
          playAgain=false;
          return;
        }
      } else {
        return;
      }
    } else if (redTilesPosition.rTile1 == -1 || redTilesPosition.rTile2 == -1 || redTilesPosition.rTile3 == -1 || redTilesPosition.rTile4 == -1) {
      canvas.addEventListener('click', function (event) {
        selectedPiece=selectedTile(event);
        redMoveOutsideBase(selectedPiece,die1Played,die2Played,diceValue);
      }, false);

      if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
        playAgain=true;
        playAgainCounter++;
      } else {
        return;
      }
    } else {
      canvas.addEventListener('click', function (event) {
        selectedPiece=selectedTile(event);
        redMoveOutsideOfBase(selectedPiece,die1Played,die2Played,diceValue);
      }, false);

      if (canPlayerPlayAgain(diceValue) == true && playAgainCounter < 3) {
        playAgain=true;
        playAgainCounter++;
      } else {
        return;
      }
    }
  }
}

function redEventHandler() {
  var diceValue =rollDice();
  (function() {
      redTurn(diceValue);
  }());
}
//enables the game
function theGame() {
  var winner = determineWinner(),
  turn = "red",
  playedCheck,
  playAgain = false,
  playAgainCounter = 0,
  die1Played = false,
  die2Played = false,
  selectedDie;

  document.getElementById('menu').style.visibility = "hidden";
  document.getElementById('ludo_game').style.visibility = 'visible';
  document.getElementById('rTile').style.visibility = 'visible';

  while (winner != "red" && winner != "green" && winner != "yellow" && winner != "blue") {
    if (turn == "red") {
      document.getElementById('diceRoll').addEventListener("click",redEventHandler, false);
      document.getElementById('diceRoll').removeEventListener("click",redEventHandler,false);

      winner = determineWinner();

      turn="green";
      document.getElementById('rTile').style.visibility = 'hidden';
      document.getElementById('gTile').style.visibility = 'visible';

    } else if (turn == "green") {
      document.getElementById('diceRoll').addEventListener("click",function () {
        // greenTurn();
      }, false);
      document.getElementById('diceRoll').removeEventListener("click",function () {
        // greenTurn();
      },false);


      winner = determineWinner();

      turn = "yellow";
      document.getElementById('gTile').style.visibility = 'hidden';
      document.getElementById('yTile').style.visibility = 'visible';

    } else if (turn == "yellow") {
      document.getElementById('diceRoll').addEventListener("click",function () {
        // yellowTurn();
      }, false);
      document.getElementById('diceRoll').removeEventListener("click",function () {
        // yellowTurn();
      },false);


      winner = determineWinner();

      turn = "blue";
      document.getElementById('yTile').style.visibility = 'hidden';
      document.getElementById('bTile').style.visibility = 'visible';

    } else if (turn == "blue") {
      document.getElementById('diceRoll').addEventListener("click",function () {
        // blueTurn();
      }, false);
      document.getElementById('diceRoll').removeEventListener("click",function () {
        // blueTurn();
      },false);


      winner = determineWinner();

      turn = "red";
      document.getElementById('bTile').style.visibility = 'hidden';
      document.getElementById('rTile').style.visibility = 'visible';
    }
  }
  document.getElementById('winner').style.visibility = 'visible';
}


//all the pieces:

//green tiles
var greenTile1=(function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile1Positions[currentPosition(greenTile1Positions)].x,greenTile1Positions[currentPosition(greenTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var greenTile2=(function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile2Positions[currentPosition(greenTile2Positions)].x,greenTile2Positions[currentPosition(greenTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var greenTile3=(function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile3Positions[currentPosition(greenTile3Positions)].x,greenTile3Positions[currentPosition(greenTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var greenTile4=(function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile4Positions[currentPosition(greenTile4Positions)].x,greenTile4Positions[currentPosition(greenTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());


//red tiles
var redTile1=(function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile1Positions[currentPosition(redTile1Positions)].x,redTile1Positions[currentPosition(redTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var redTile2=(function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile2Positions[currentPosition(redTile2Positions)].x,redTile2Positions[currentPosition(redTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var redTile3=(function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile3Positions[currentPosition(redTile3Positions)].x,redTile3Positions[currentPosition(redTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var redTile4=(function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile4Positions[currentPosition(redTile4Positions)].x,redTile4Positions[currentPosition(redTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());


//yellow tiles
var yellowTile1=(function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile1Positions[currentPosition(yellowTile1Positions)].x,yellowTile1Positions[currentPosition(yellowTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var yellowTile2=(function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile2Positions[currentPosition(yellowTile2Positions)].x,yellowTile2Positions[currentPosition(yellowTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var yellowTile3=(function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile3Positions[currentPosition(yellowTile3Positions)].x,yellowTile3Positions[currentPosition(yellowTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var yellowTile4=(function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile4Positions[currentPosition(yellowTile4Positions)].x,yellowTile4Positions[currentPosition(yellowTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());


//blue tiles
var blueTile1=(function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile1Positions[currentPosition(blueTile1Positions)].x,blueTile1Positions[currentPosition(blueTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var blueTile2=(function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile2Positions[currentPosition(blueTile2Positions)].x,blueTile2Positions[currentPosition(blueTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var blueTile3=(function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile3Positions[currentPosition(blueTile3Positions)].x,blueTile3Positions[currentPosition(blueTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

var blueTile4=(function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile4Positions[currentPosition(blueTile4Positions)].x,blueTile4Positions[currentPosition(blueTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());
