// Menu Options
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



var redDiceValue,yellowDiceValue,greenDiceValue,blueDiceValue,selectedPiece,chosenDie1,chosenDie2,played;

//the canvas initialisation
const canvas=document.getElementById('boardCanvas');
const ctx=canvas.getContext('2d');
canvas.addEventListener('click',function (event) {
  selectedTile(event);
}, false);

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

/* Dice functions */
//roll dice
function rollDice(){
  var diceValue,
  diceValue1=Math.floor((Math.random()*6) + 1),
  diceValue2=Math.floor((Math.random()*6) + 1);

  // if (turn=="red") {
  //   redDiceValue=[diceValue1,diceValue2];
  // } else if (turn=="green") {
  //   greenDiceValue=[diceValue1,diceValue2];
  // } else if (turn=="yellow") {
  //   yellowDiceValue=[diceValue1,diceValue2];
  // } else if (turn=="blue") {
  //   blueDiceValue=[diceValue1,diceValue2];
  // }
  diceValue=[diceValue1,diceValue2];

  document.getElementById('die1').src='Images/'+ diceValue1 +'.jpg';
  document.getElementById('die2').src='Images/'+ diceValue2 +'.jpg';

  return diceValue;
}

// this function identifies whether a tile has been clicked and compares it
// with the different tile positions and confirms which tile was clicked
// by returning true if the tilePosition corresponds with the clicked spot
function tile(pos, tilePositions) {
  if (Math.pow(pos.x-tilePositions[currentPosition(tilePositions)].x,2)+Math.pow(pos.y-tilePositions[currentPosition(tilePositions)].y,2) < Math.pow(20,2)) {
    return true;
  } else {
    return false;
  }
}

// this function identifies the position of the tile and returns the corresponding
// tile occupying the position clicked upon
function selectedTile(event) {

  const pos = {
    x: event.clientX,
    y: event.clientY
  };
  // var selectedTile = "none";
  if (tile(pos, greenTile1Positions)) {
    selectedPiece = "greenTile1";
    ctx.beginPath();
    ctx.arc(greenTile1Positions[currentPosition(greenTile1Positions)].x,greenTile1Positions[currentPosition(greenTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();

    // alert(selectedPiece);
  } else if (tile(pos, greenTile2Positions)) {
    selectedPiece = "greenTile2";
    ctx.beginPath();
    ctx.arc(greenTile2Positions[currentPosition(greenTile2Positions)].x,greenTile2Positions[currentPosition(greenTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, greenTile3Positions)) {
    selectedPiece = "greenTile3";
    ctx.beginPath();
    ctx.arc(greenTile3Positions[currentPosition(greenTile3Positions)].x,greenTile3Positions[currentPosition(greenTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, greenTile4Positions)) {
    selectedPiece = "greenTile4";
    ctx.beginPath();
    ctx.arc(greenTile4Positions[currentPosition(greenTile4Positions)].x,greenTile4Positions[currentPosition(greenTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, redTile1Positions)) {
    selectedPiece = "redTile1";
    ctx.beginPath();
    ctx.arc(redTile1Positions[currentPosition(redTile1Positions)].x,redTile1Positions[currentPosition(redTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, redTile2Positions)) {
    selectedPiece = "redTile2";
    ctx.beginPath();
    ctx.arc(redTile2Positions[currentPosition(redTile2Positions)].x,redTile2Positions[currentPosition(redTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, redTile3Positions)) {
    selectedPiece = "redTile3";
    ctx.beginPath();
    ctx.arc(redTile3Positions[currentPosition(redTile3Positions)].x,redTile3Positions[currentPosition(redTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, redTile4Positions)) {
    selectedPiece = "redTile4";
    ctx.beginPath();
    ctx.arc(redTile4Positions[currentPosition(redTile4Positions)].x,redTile4Positions[currentPosition(redTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, yellowTile1Positions)) {
    selectedPiece = "yellowTile1";
    ctx.beginPath();
    ctx.arc(yellowTile1Positions[currentPosition(yellowTile1Positions)].x,yellowTile1Positions[currentPosition(yellowTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, yellowTile2Positions)) {
    selectedPiece = "yellowTile2";
    ctx.beginPath();
    ctx.arc(yellowTile2Positions[currentPosition(yellowTile2Positions)].x,yellowTile2Positions[currentPosition(yellowTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, yellowTile3Positions)) {
    selectedPiece = "yellowTile3";
    ctx.beginPath();
    ctx.arc(yellowTile3Positions[currentPosition(yellowTile3Positions)].x,yellowTile3Positions[currentPosition(yellowTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, yellowTile4Positions)) {
    selectedPiece = "yellowTile4";
    ctx.beginPath();
    ctx.arc(yellowTile4Positions[currentPosition(yellowTile4Positions)].x,yellowTile4Positions[currentPosition(yellowTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, blueTile1Positions)) {
    selectedPiece = "blueTile1";
    ctx.beginPath();
    ctx.arc(blueTile1Positions[currentPosition(blueTile1Positions)].x,blueTile1Positions[currentPosition(blueTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, blueTile2Positions)) {
    selectedPiece = "blueTile2";
    ctx.beginPath();
    ctx.arc(blueTile2Positions[currentPosition(blueTile2Positions)].x,blueTile2Positions[currentPosition(blueTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, blueTile3Positions)) {
    selectedPiece = "blueTile3";
    ctx.beginPath();
    ctx.arc(blueTile3Positions[currentPosition(blueTile3Positions)].x,blueTile3Positions[currentPosition(blueTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  } else if (tile(pos, blueTile4Positions)) {
    selectedPiece = "blueTile4";
    ctx.beginPath();
    ctx.arc(blueTile4Positions[currentPosition(blueTile4Positions)].x,blueTile4Positions[currentPosition(blueTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle= "white";
    ctx.stroke();
    // alert(selectedPiece);
  }
  return selectedPiece;
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







// function redPlay() {
//   rollDice();
// }
// function greenEventHandler() {
//   rollDice();
// }
// function yellowEventHandler() {
//   rollDice();
// }
// function blueEventHandler() {
//   rollDice();
// }

//enables the game
function theGame() {
  var winner = determineWinner(),
  turn = "red";
  // playedCheck,
  // playAgain = [false,0],
  // playAgainCounter = 0,
  // die1Played = false,
  // die2Played = false,
  // selectedDie;

  document.getElementById('menu').style.visibility = "hidden";
  document.getElementById('ludo_game').style.visibility = 'visible';
  document.getElementById('rTile').style.visibility = 'visible';

  while (winner != "red" && winner != "green" && winner != "yellow" && winner != "blue") {
    if (turn == "red") {
      // while (playAgain[0]==true && playAgain[1] < 3) {
        // document.getElementById('diceRoll').addEventListener("click",function () {
        //   rollDice();
        // }, {once: true});
        // document.getElementById('diceRoll').removeEventListener("click",redEventHandler,false);

        document.getElementById('diceRoll').addEventListener("click",function () {
          redDiceValue=rollDice();
        },{once: true});

        document.getElementById('die1').addEventListener("click", function () {
          document.getElementById('die1').style.border = "thick solid red";
          // selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour);
          die1Played=true;
        }, {once: true});

        document.getElementById('die2').addEventListener("click", function () {
          document.getElementById('die2').style.border = "thick solid red";
          // selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour);
          die2Played=true;
        }, {once: true});
        // playAgain=redTurn(redDiceValue);

      // }

      winner = determineWinner();

      turn="green";
      document.getElementById('rTile').style.visibility = 'hidden';
      document.getElementById('gTile').style.visibility = 'visible';

    } else if (turn == "green") {
      document.getElementById('diceRoll').addEventListener("click",greenEventHandler, false);
      document.getElementById('diceRoll').removeEventListener("click",greenEventHandler,false);

      // greenTurn(greenDiceValue);

      winner = determineWinner();

      turn = "yellow";
      document.getElementById('gTile').style.visibility = 'hidden';
      document.getElementById('yTile').style.visibility = 'visible';

    } else if (turn == "yellow") {
      document.getElementById('diceRoll').addEventListener("click",yellowEventHandler, false);
      document.getElementById('diceRoll').removeEventListener("click",yellowEventHandler,false);

      // yellowTurn(yellowDiceValue);

      winner = determineWinner();

      turn = "blue";
      document.getElementById('yTile').style.visibility = 'hidden';
      document.getElementById('bTile').style.visibility = 'visible';

    } else if (turn == "blue") {
      document.getElementById('diceRoll').addEventListener("click",blueEventHandler, false);
      document.getElementById('diceRoll').removeEventListener("click",blueEventHandler,false);

      // blueTurn(blueDiceValue);

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
