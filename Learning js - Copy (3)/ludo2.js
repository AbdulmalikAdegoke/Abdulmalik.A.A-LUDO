//the canvas initialisation
const canvas=document.getElementById('boardCanvas');
const ctx=canvas.getContext('2d');
// canvas.addEventListener('click',function (event) {
//   selectedTile(event);
// }, false);

//the board
var board=function() {
  //green base
  // var greenBase=function() {
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
  // }

  //red base
  // var redBase=function() {
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
  // }

  //yellow base
  // var yellowBase=function() {
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
  // }

  //blue base
  // var blueBase=function() {
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
  // }

  //the positions x and y for the tiles
  var positionx;
  var positiony;

  //top tile path
  // var topTilePath=function() {
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
  // }

  //middle tile path-left
  // var middleTilePathLeft=function() {
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
  // }

  //middle path- winner's spot
  //green home
  // var greenHome=function() {
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
  // }

  //red home
  // var redHome=function() {
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
  // }

  //blue home
  // var blueHome=function() {
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
  // }

  //yellow home
  // var yellowHome=function() {
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
  // }


  //middle tile path-right
  // var middleTilePathRight=function() {
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
  // }


  //bottom tile path
  // var bottomTilePath=function() {
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
  // }
}


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
  var current=positionArray.length;
  return current-1;
}
//calculates the previous position of the tile
function previousPosition(positionArray) {
  var previous=currentPosition(positionArray)-1;
  return previous;
}


//all the pieces:
var greenTile1,greenTile2,greenTile3, greenTile4,redTile1,redTile2,redTile3,redTile4,yellowTile1,yellowTile2,yellowTile3,yellowTile4,blueTile1,blueTile2,blueTile3,blueTile4;
//green tiles
greenTile1=function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile1Positions[currentPosition(greenTile1Positions)].x,greenTile1Positions[currentPosition(greenTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

greenTile2=function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile2Positions[currentPosition(greenTile2Positions)].x,greenTile2Positions[currentPosition(greenTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

greenTile3=function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile3Positions[currentPosition(greenTile3Positions)].x,greenTile3Positions[currentPosition(greenTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

greenTile4=function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile4Positions[currentPosition(greenTile4Positions)].x,greenTile4Positions[currentPosition(greenTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }


//red tiles
redTile1=function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile1Positions[currentPosition(redTile1Positions)].x,redTile1Positions[currentPosition(redTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

redTile2=function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile2Positions[currentPosition(redTile2Positions)].x,redTile2Positions[currentPosition(redTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

redTile3=function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile3Positions[currentPosition(redTile3Positions)].x,redTile3Positions[currentPosition(redTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

redTile4=function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile4Positions[currentPosition(redTile4Positions)].x,redTile4Positions[currentPosition(redTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }


//yellow tiles
yellowTile1=function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile1Positions[currentPosition(yellowTile1Positions)].x,yellowTile1Positions[currentPosition(yellowTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

yellowTile2=function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile2Positions[currentPosition(yellowTile2Positions)].x,yellowTile2Positions[currentPosition(yellowTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

yellowTile3=function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile3Positions[currentPosition(yellowTile3Positions)].x,yellowTile3Positions[currentPosition(yellowTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

yellowTile4=function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile4Positions[currentPosition(yellowTile4Positions)].x,yellowTile4Positions[currentPosition(yellowTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }


//blue tiles
blueTile1=function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile1Positions[currentPosition(blueTile1Positions)].x,blueTile1Positions[currentPosition(blueTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

blueTile2=function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile2Positions[currentPosition(blueTile2Positions)].x,blueTile2Positions[currentPosition(blueTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

blueTile3=function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile3Positions[currentPosition(blueTile3Positions)].x,blueTile3Positions[currentPosition(blueTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

blueTile4=function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile4Positions[currentPosition(blueTile4Positions)].x,blueTile4Positions[currentPosition(blueTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }


var launchGame=(function() {
  board();
  greenTile1();
  greenTile2();
  greenTile3();
  greenTile4();
  redTile1();
  redTile2();
  redTile3();
  redTile4();
  yellowTile1();
  yellowTile2();
  yellowTile3();
  yellowTile4();
  blueTile1();
  blueTile2();
  blueTile3();
  blueTile4();
}());

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
//the function for the saved games button
// displays the settings
function displaySettings() {
  document.getElementById('menu').style.visibility="hidden";
  document.getElementById('settings').style.visibility='visible';
}
// the function for the main menu button
// returns from the current page to the main menu
function mainMenu(page) {
  document.getElementById('menu').style.visibility="visible";
  document.getElementById(page).style.visibility='hidden';
  if (page=="settings") {
    document.getElementById("errorMsg").innerHTML="";
    document.getElementById("diceRollTime").value="";

  }
}
// resets the tile positions on exit
function tilePositionReset() {
  removePositions(redTile1Positions);
  redTilesPosition.rTile1 = -1;

  removePositions(redTile2Positions);
  redTilesPosition.rTile2 = -1;

  removePositions(redTile3Positions);
  redTilesPosition.rTile3 = -1;

  removePositions(redTile4Positions);
  redTilesPosition.rTile4 = -1;

  removePositions(yellowTile1Positions);
  yellowTilesPosition.yTile1 = -1;

  removePositions(yellowTile2Positions);
  yellowTilesPosition.yTile2 = -1;

  removePositions(yellowTile3Positions);
  yellowTilesPosition.yTile3 = -1;

  removePositions(yellowTile4Positions);
  yellowTilesPosition.yTile4 = -1;

  removePositions(greenTile1Positions);
  greenTilesPosition.gTile1 = -1;

  removePositions(greenTile2Positions);
  greenTilesPosition.gTile2 = -1;

  removePositions(greenTile3Positions);
  greenTilesPosition.gTile3 = -1;

  removePositions(greenTile4Positions);
  greenTilesPosition.gTile4 = -1;

  removePositions(blueTile1Positions);
  blueTilesPosition.bTile1 = -1;

  removePositions(blueTile2Positions);
  blueTilesPosition.bTile2 = -1;

  removePositions(blueTile3Positions);
  blueTilesPosition.bTile3 = -1;

  removePositions(blueTile4Positions);
  blueTilesPosition.bTile4 = -1;
}
// the function for the save game button
// that displays the menu for saving the game
function saveGameMenu() {
  document.getElementById("saveGameBox").style.visibility="visible";
}

var exitGame;
// the function for the exit game button
// returns from the game page to the main menu and resets the board to it's defaul state
function exitGame() {
  exitGame=true;
  document.getElementById('menu').style.visibility="visible";
  document.getElementById('ludo_game').style.visibility='hidden';
  document.getElementById('bTile').style.visibility = 'hidden';
  document.getElementById('yTile').style.visibility = 'hidden';
  document.getElementById('gTile').style.visibility = 'hidden';
  document.getElementById('rTile').style.visibility = 'hidden';
  document.getElementById('exitGameBox').style.visibility = 'hidden';
  tilePositionReset();
}
// the function for the exit game button
// that displays the menu for exiting the game
function exitGameMenu() {
  document.getElementById("exitGameBox").style.visibility="visible";
}
//random selector of the starting player
function startingPlayer() {
  var startDecider=Math.floor((Math.random()*4) + 1),
  starter;
  if (startDecider==1) {
    starter="red";
  } else if (startDecider==2) {
    starter="green";
  } else if (startDecider==3) {
    starter="yellow";
  } else if (startDecider==4) {
    starter="blue";
  }

  return starter;
}

// sets the dice rolling time in seconds
var time,defaultTime=2000;
function setTime() {
  if (isNaN(document.getElementById("diceRollTime").value)==true || document.getElementById("diceRollTime").value<=0) {
    document.getElementById("errorMsg").innerHTML="Invalid  Input. Re-enter value";
  } else {
    time=document.getElementById("diceRollTime").value*1000;
  }
}
/* In-game options */
var globalDie1=1,globalDie2=1;
//roll dice
function rollDice(){
  var diceValue1=Math.floor((Math.random()*6) + 1),
  diceValue2=Math.floor((Math.random()*6) + 1);
  alert("roll dice function");
  if (diceValue1>diceValue2) {
    document.getElementById('die1').src='Images/'+ diceValue1 +'.jpg';
    document.getElementById('die2').src='Images/'+ diceValue2 +'.jpg';
    // globalDie1=diceValue1;
    // globalDie2=diceValue2;
    return [diceValue1,diceValue2];
  } else if (diceValue1>diceValue2) {
    document.getElementById('die1').src='Images/'+ diceValue2 +'.jpg';
    document.getElementById('die2').src='Images/'+ diceValue1 +'.jpg';
    // globalDie1=diceValue2;
    // globalDie2=diceValue1;
    return [diceValue2,diceValue1];
  } else if (diceValue1==diceValue2) {
    document.getElementById('die1').src='Images/'+ diceValue1 +'.jpg';
    document.getElementById('die2').src='Images/'+ diceValue2 +'.jpg';
    // globalDie1=diceValue1;
    // globalDie2=diceValue2;
    return [diceValue1,diceValue2];
  }

}
// roll dice animation
function rollDiceAnimation() {
  var timer;
  if (isNaN(time)) {
    for (var i = 0; i < defaultTime;i+500) {
      // i=i+500;
      timer=setTimeout(function () {
        var diceValue1=Math.floor((Math.random()*6) + 1),
        diceValue2=Math.floor((Math.random()*6) + 1);
        document.getElementById('die1').src='Images/'+ diceValue1 +'.jpg';
        document.getElementById('die2').src='Images/'+ diceValue2 +'.jpg';
      },i);
    }
    clearTimeOut(timer);
  } else {
    for (var i = 0; i < time;i+500) {
      // i=i+500;
      timer=setTimeout(function () {
        var diceValue1=Math.floor((Math.random()*6) + 1),
        diceValue2=Math.floor((Math.random()*6) + 1);
        document.getElementById('die1').src='Images/'+ diceValue1 +'.jpg';
        document.getElementById('die2').src='Images/'+ diceValue2 +'.jpg';
      },i);
    }
    clearTimeOut(timer);
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
  } else if (currentlyPlayedTilePosition == redTilesPosition.rTile2) {
    removePositions(redTile2Positions);
    redTilesPosition.rTile2 = -1;
  } else if (currentlyPlayedTilePosition == redTilesPosition.rTile3) {
    removePositions(redTile3Positions);
    redTilesPosition.rTile3 = -1;
  } else if (currentlyPlayedTilePosition == redTilesPosition.rTile4) {
    removePositions(redTile4Positions);
    redTilesPosition.rTile4 = -1;
  }
}

//checks if currently played position if occupied by yellow
function occupiedByYellow(currentlyPlayedTilePosition) {
  if (currentlyPlayedTilePosition == yellowTilesPosition.yTile1) {
    removePositions(yellowTile1Positions);
    yellowTilesPosition.yTile1 = -1;
  } else if (currentlyPlayedTilePosition == yellowTilesPosition.yTile2) {
    removePositions(yellowTile2Positions);
    yellowTilesPosition.yTile2 = -1;
  } else if (currentlyPlayedTilePosition == yellowTilesPosition.yTile3) {
    removePositions(yellowTile3Positions);
    yellowTilesPosition.yTile3 = -1;
  } else if (currentlyPlayedTilePlayPosition == yellowTilesPosition.yTile4) {
    removePositions(yellowTile4Positions);
    yellowTilesPosition.yTile4 = -1;
  }
}

//checks if currently played position if occupied by green
function occupiedByGreen(currentlyPlayedTilePosition) {
  if (currentlyPlayedTilePosition == greenTilesPosition.gTile1) {
    removePositions(greenTile1Positions);
    greenTilesPosition.gTile1 = -1;
  } else if (currentlyPlayedTilePosition == greenTilesPosition.gTile2) {
    removePositions(greenTile2Positions);
    greenTilesPosition.gTile2 = -1;
  } else if (currentlyPlayedTilePosition == greenTilesPosition.gTile3) {
    removePositions(greenTile3Positions);
    greenTilesPosition.gTile3 = -1;
  } else if (currentlyPlayedTilePlayPosition == greenTilesPosition.gTile4) {
    removePositions(greenTile4Positions);
    greenTilesPosition.gTile4 = -1;
  }
}

//checks if currently played position if occupied by blue
function occupiedByBlue(currentlyPlayedTilePosition) {
  if (currentlyPlayedTilePosition == blueTilesPosition.bTile1) {
    removePositions(blueTile1Positions);
    blueTilesPosition.bTile1 = -1;
  } else if (currentlyPlayedTilePosition == blueTilesPosition.bTile2) {
    removePositions(blueTile2Positions);
    blueTilesPosition.bTile2 = -1;
  } else if (currentlyPlayedTilePosition == blueTilesPosition.bTile3) {
    removePositions(blueTile3Positions);
    blueTilesPosition.bTile3 = -1;
  } else if (currentlyPlayedTilePlayPosition == blueTilesPosition.bTile4) {
    removePositions(blueTile4Positions);
    blueTilesPosition.bTile4 = -1;
  }
}

//responsible for the capturing procedure of the game after checking if the currently played position is occupied by another coloured piece
function capture(currentlyPlayedTilePosition, currentlyPlayedTile) {
  if (currentlyPlayedTile == "redTile") {
    occupiedByBlue(currentlyPlayedTilePosition);
    occupiedByGreen(currentlyPlayedTilePosition);
    occupiedByYellow(currentlyPlayedTilePosition);

    return;
  } else if (currentlyPlayedTile == "blueTile") {
    occupiedByRed(currentlyPlayedTilePosition);
    occupiedByGreen(currentlyPlayedTilePosition);
    occupiedByYellow(currentlyPlayedTilePosition);

    return;
  } else if (currentlyPlayedTile == "yellowTile") {
    occupiedByBlue(currentlyPlayedTilePosition);
    occupiedByGreen(currentlyPlayedTilePosition);
    occupiedByRed(currentlyPlayedTilePosition);

    return;
  } else if (currentlyPlayedTile == "greenTile") {
    occupiedByBlue(currentlyPlayedTilePosition);
    occupiedByRed(currentlyPlayedTilePosition);
    occupiedByYellow(currentlyPlayedTilePosition);

    return;
  }
}

function clearPreviousPosition(tile) {
  if (tile=="redTile1") {
    if (previousPosition(redTile1Positions)==1 || (previousPosition(redTile1Positions)>50 && previousPosition(redTile1Positions)<56)) {
      ctx.fillStyle='red';
      ctx.beginPath();
      ctx.arc(redTile1Positions[previousPosition(redTile1Positions)].x,redTile1Positions[previousPosition(redTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='red';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(redTile1Positions[previousPosition(redTile1Positions)].x,redTile1Positions[previousPosition(redTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="redTile2") {
    if (previousPosition(redTile2Positions)==1 || (previousPosition(redTile2Positions)>50 && previousPosition(redTile2Positions)<56)) {
      ctx.fillStyle='red';
      ctx.beginPath();
      ctx.arc(redTile2Positions[previousPosition(redTile2Positions)].x,redTile2Positions[previousPosition(redTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='red';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(redTile2Positions[previousPosition(redTile2Positions)].x,redTile2Positions[previousPosition(redTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="redTile3") {
    if (previousPosition(redTile3Positions)==1 || (previousPosition(redTile3Positions)>50 && previousPosition(redTile3Positions)<56)) {
      ctx.fillStyle='red';
      ctx.beginPath();
      ctx.arc(redTile3Positions[previousPosition(redTile3Positions)].x,redTile3Positions[previousPosition(redTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='red';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(redTile3Positions[previousPosition(redTile3Positions)].x,redTile3Positions[previousPosition(redTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="redTile4") {
    if (previousPosition(redTile4Positions)==1 || (previousPosition(redTile4Positions)>50 && previousPosition(redTile4Positions)<56)) {
      ctx.fillStyle='red';
      ctx.beginPath();
      ctx.arc(redTile4Positions[previousPosition(redTile4Positions)].x,redTile4Positions[previousPosition(redTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='red';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(redTile4Positions[previousPosition(redTile4Positions)].x,redTile4Positions[previousPosition(redTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="greenTile1") {
    if (previousPosition(greenTile1Positions)==1 || (previousPosition(greenTile1Positions)>50 && previousPosition(greenTile1Positions)<56)) {
      ctx.fillStyle='green';
      ctx.beginPath();
      ctx.arc(greenTile1Positions[previousPosition(greenTile1Positions)].x,greenTile1Positions[previousPosition(greenTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='green';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(greenTile1Positions[previousPosition(greenTile1Positions)].x,greenTile1Positions[previousPosition(greenTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="greenTile2") {
    if (previousPosition(greenTile2Positions)==1 || (previousPosition(greenTile2Positions)>50 && previousPosition(greenTile2Positions)<56)) {
      ctx.fillStyle='green';
      ctx.beginPath();
      ctx.arc(greenTile2Positions[previousPosition(greenTile2Positions)].x,greenTile2Positions[previousPosition(greenTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='green';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(greenTile2Positions[previousPosition(greenTile2Positions)].x,greenTile2Positions[previousPosition(greenTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="greenTile3") {
    if (previousPosition(greenTile3Positions)==1 || (previousPosition(greenTile3Positions)>50 && previousPosition(greenTile3Positions)<56)) {
      ctx.fillStyle='green';
      ctx.beginPath();
      ctx.arc(greenTile3Positions[previousPosition(greenTile3Positions)].x,greenTile3Positions[previousPosition(greenTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='green';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(greenTile3Positions[previousPosition(greenTile3Positions)].x,greenTile3Positions[previousPosition(greenTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="greenTile4") {
    if (previousPosition(greenTile4Positions)==1 || (previousPosition(greenTile4Positions)>50 && previousPosition(greenTile4Positions)<56)) {
      ctx.fillStyle='green';
      ctx.beginPath();
      ctx.arc(greenTile4Positions[previousPosition(greenTile4Positions)].x,greenTile4Positions[previousPosition(greenTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='green';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(greenTile4Positions[previousPosition(greenTile4Positions)].x,greenTile4Positions[previousPosition(greenTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="yellowTile1") {
    if (previousPosition(yellowTile1Positions)==1 || (previousPosition(yellowTile1Positions)>50 && previousPosition(yellowTile1Positions)<56)) {
      ctx.fillStyle='yellow';
      ctx.beginPath();
      ctx.arc(yellowTile1Positions[previousPosition(yellowTile1Positions)].x,yellowTile1Positions[previousPosition(yellowTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='yellow';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(yellowTile1Positions[previousPosition(yellowTile1Positions)].x,yellowTile1Positions[previousPosition(yellowTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="yellowTile2") {
    if (previousPosition(yellowTile2Positions)==1 || (previousPosition(yellowTile2Positions)>50 && previousPosition(yellowTile2Positions)<56)) {
      ctx.fillStyle='yellow';
      ctx.beginPath();
      ctx.arc(yellowTile2Positions[previousPosition(yellowTile2Positions)].x,yellowTile2Positions[previousPosition(yellowTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='yellow';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(yellowTile2Positions[previousPosition(yellowTile2Positions)].x,yellowTile2Positions[previousPosition(yellowTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="yellowTile3") {
    if (previousPosition(yellowTile3Positions)==1 || (previousPosition(yellowTile3Positions)>50 && previousPosition(yellowTile3Positions)<56)) {
      ctx.fillStyle='yellow';
      ctx.beginPath();
      ctx.arc(yellowTile3Positions[previousPosition(yellowTile3Positions)].x,yellowTile3Positions[previousPosition(yellowTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='yellow';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(yellowTile3Positions[previousPosition(yellowTile3Positions)].x,yellowTile3Positions[previousPosition(yellowTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="yellowTile4") {
    if (previousPosition(yellowTile4Positions)==1 || (previousPosition(yellowTile4Positions)>50 && previousPosition(yellowTile4Positions)<56)) {
      ctx.fillStyle='yellow';
      ctx.beginPath();
      ctx.arc(yellowTile4Positions[previousPosition(yellowTile4Positions)].x,yellowTile4Positions[previousPosition(yellowTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='yellow';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(yellowTile4Positions[previousPosition(yellowTile4Positions)].x,yellowTile4Positions[previousPosition(yellowTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="blueTile1") {
    if (previousPosition(blueTile1Positions)==1 || (previousPosition(blueTile1Positions)>50 && previousPosition(blueTile1Positions)<56)) {
      ctx.fillStyle='blue';
      ctx.beginPath();
      ctx.arc(blueTile1Positions[previousPosition(blueTile1Positions)].x,blueTile1Positions[previousPosition(blueTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='blue';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(blueTile1Positions[previousPosition(blueTile1Positions)].x,blueTile1Positions[previousPosition(blueTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="blueTile2") {
    if (previousPosition(blueTile2Positions)==1 || (previousPosition(blueTile2Positions)>50 && previousPosition(blueTile2Positions)<56)) {
      ctx.fillStyle='blue';
      ctx.beginPath();
      ctx.arc(blueTile2Positions[previousPosition(blueTile2Positions)].x,blueTile2Positions[previousPosition(blueTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='blue';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(blueTile2Positions[previousPosition(blueTile2Positions)].x,blueTile2Positions[previousPosition(blueTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="blueTile3") {
    if (previousPosition(blueTile3Positions)==1 || (previousPosition(blueTile3Positions)>50 && previousPosition(blueTile3Positions)<56)) {
      ctx.fillStyle='blue';
      ctx.beginPath();
      ctx.arc(blueTile3Positions[previousPosition(blueTile3Positions)].x,blueTile3Positions[previousPosition(blueTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='blue';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(blueTile3Positions[previousPosition(blueTile3Positions)].x,blueTile3Positions[previousPosition(blueTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  } else if (tile=="blueTile4") {
    if (previousPosition(blueTile4Positions)==1 || (previousPosition(blueTile4Positions)>50 && previousPosition(blueTile4Positions)<56)) {
      ctx.fillStyle='blue';
      ctx.beginPath();
      ctx.arc(blueTile4Positions[previousPosition(blueTile4Positions)].x,blueTile4Positions[previousPosition(blueTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='blue';
      ctx.stroke();
      ctx.fill();
    } else {
      ctx.fillStyle='white';
      ctx.beginPath();
      ctx.arc(blueTile4Positions[previousPosition(blueTile4Positions)].x,blueTile4Positions[previousPosition(blueTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle='white';
      ctx.stroke();
      ctx.fill();
    }
  }
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
          redTile1();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        redTilesPosition.rTile1 = redTilesPosition.rTile1 + selectedDie;
        x = redTilePath[redTilesPosition.rTile1][0];
        y = redTilePath[redTilesPosition.rTile1][1];
        addPosition(x, y, redTile1Positions);
        redTile1();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "redTile2") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          redTilesPosition.rTile2 = redTilesPosition.rTile2 + 1;
          x = redTilePath[redTilesPosition.rTile2][0];
          y = redTilePath[redTilesPosition.rTile2][1];
          addPosition(x, y, redTile2Positions);
          redTile2();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        redTilesPosition.rTile2 = redTilesPosition.rTile2 + selectedDie;
        x = redTilePath[redTilesPosition.rTile2][0];
        y = redTilePath[redTilesPosition.rTile2][1];
        addPosition(x, y, redTile2Positions);
        redTile2();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "redTile3") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          redTilesPosition.rTile3 = redTilesPosition.rTile3 + 1;
          x = redTilePath[redTilesPosition.rTile3][0];
          y = redTilePath[redTilesPosition.rTile3][1];
          addPosition(x, y, redTile3Positions);
          redTile3();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        redTilesPosition.rTile3 = redTilesPosition.rTile3 + selectedDie;
        x = redTilePath[redTilesPosition.rTile3][0];
        y = redTilePath[redTilesPosition.rTile3][1];
        addPosition(x, y, redTile3Positions);
        redTile3();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "redTile4") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          redTilesPosition.rTile4 = redTilesPosition.rTile4 + 1;
          x = redTilePath[redTilesPosition.rTile4][0];
          y = redTilePath[redTilesPosition.rTile4][1];
          addPosition(x, y, redTile4Positions);
          redTile4();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        redTilesPosition.rTile4 = redTilesPosition.rTile4 + selectedDie;
        x = redTilePath[redTilesPosition.rTile4][0];
        y = redTilePath[redTilesPosition.rTile4][1];
        addPosition(x, y, redTile4Positions);
        redTile4();
        clearPreviousPosition(selectedTile);
        // return true;
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
          greenTile1();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        greenTilesPosition.gTile1 = greenTilesPosition.gTile1 + selectedDie;
        x = greenTilePath[greenTilesPosition.gTile1][0];
        y = greenTilePath[greenTilesPosition.gTile1][1];
        addPosition(x, y, greenTile1Positions);
        greenTile1();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "greenTile2") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          greenTilesPosition.gTile2 = greenTilesPosition.gTile2 + 1;
          x = greenTilePath[greenTilesPosition.gTile2][0];
          y = greenTilePath[greenTilesPosition.gTile2][1];
          addPosition(x, y, greenTile2Positions);
          greenTile2();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        greenTilesPosition.gTile2 = greenTilesPosition.gTile2 + selectedDie;
        x = greenTilePath[greenTilesPosition.gTile2][0];
        y = greenTilePath[greenTilesPosition.gTile2][1];
        addPosition(x, y, greenTile2Positions);
        greenTile2();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "greenTile3") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          greenTilesPosition.gTile3 = greenTilesPosition.gTile3 + 1;
          x = greenTilePath[greenTilesPosition.gTile3][0];
          y = greenTilePath[greenTilesPosition.gTile3][1];
          addPosition(x, y, greenTile3Positions);
          greenTile3();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        greenTilesPosition.gTile3 = greenTilesPosition.gTile3 + selectedDie;
        x = greenTilePath[greenTilesPosition.gTile3][0];
        y = greenTilePath[greenTilesPosition.gTile3][1];
        addPosition(x, y, greenTile3Positions);
        greenTile3();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "greenTile4") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          greenTilesPosition.gTile4 = greenTilesPosition.gTile4 + 1;
          x = greenTilePath[greenTilesPosition.gTile4][0];
          y = greenTilePath[greenTilesPosition.gTile4][1];
          addPosition(x, y, greenTile4Positions);
          greenTile4();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        greenTilesPosition.gTile4 = greenTilesPosition.gTile4 + selectedDie;
        x = greenTilePath[greenTilesPosition.gTile4][0];
        y = greenTilePath[greenTilesPosition.gTile4][1];
        addPosition(x, y, greenTile4Positions);
        greenTile4();
        clearPreviousPosition(selectedTile);
        // return true;
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
          yellowTile1();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        yellowTilesPosition.yTile1 = yellowTilesPosition.yTile1 + selectedDie;
        x = yellowTilePath[yellowTilesPosition.yTile1][0];
        y = yellowTilePath[yellowTilesPosition.yTile1][1];
        addPosition(x, y, yellowTile1Positions);
        yellowTile1();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "yellowTile2") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          yellowTilesPosition.yTile2 = yellowTilesPosition.yTile2 + 1;
          x = yellowTilePath[yellowTilesPosition.yTile2][0];
          y = yellowTilePath[yellowTilesPosition.yTile2][1];
          addPosition(x, y, yellowTile2Positions);
          yellowTile2();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        yellowTilesPosition.yTile2 = yellowTilesPosition.yTile2 + selectedDie;
        x = yellowTilePath[yellowTilesPosition.yTile2][0];
        y = yellowTilePath[yellowTilesPosition.yTile2][1];
        addPosition(x, y, yellowTile2Positions);
        yellowTile2();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "yellowTile3") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          yellowTilesPosition.yTile3 = yellowTilesPosition.yTile3 + 1;
          x = yellowTilePath[yellowTilesPosition.yTile3][0];
          y = yellowTilePath[yellowTilesPosition.yTile3][1];
          addPosition(x, y, yellowTile3Positions);
          yellowTile3();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        yellowTilesPosition.yTile3 = yellowTilesPosition.yTile3 + selectedDie;
        x = yellowTilePath[yellowTilesPosition.yTile3][0];
        y = yellowTilePath[yellowTilesPosition.yTile3][1];
        addPosition(x, y, yellowTile3Positions);
        yellowTile3();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "yellowTile4") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          yellowTilesPosition.yTile4 = yellowTilesPosition.yTile4 + 1;
          x = yellowTilePath[yellowTilesPosition.yTile4][0];
          y = yellowTilePath[yellowTilesPosition.yTile4][1];
          addPosition(x, y, yellowTile4Positions);
          yellowTile4();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        yellowTilesPosition.yTile4 = yellowTilesPosition.yTile4 + selectedDie;
        x = yellowTilePath[yellowTilesPosition.yTile4][0];
        y = yellowTilePath[yellowTilesPosition.yTile4][1];
        addPosition(x, y, yellowTile4Positions);
        yellowTile4();
        clearPreviousPosition(selectedTile);
        // return true;
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
          blueTile1();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        blueTilesPosition.bTile1 = blueTilesPosition.bTile1 + selectedDie;
        x = blueTilePath[blueTilesPosition.bTile1][0];
        y = blueTilePath[blueTilesPosition.bTile1][1];
        addPosition(x, y, blueTile1Positions);
        blueTile1();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "blueTile2") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          blueTilesPosition.bTile2 = blueTilesPosition.bTile2 + 1;
          x = blueTilePath[blueTilesPosition.bTile2][0];
          y = blueTilePath[blueTilesPosition.bTile2][1];
          addPosition(x, y, blueTile2Positions);
          blueTile2();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        blueTilesPosition.bTile2 = blueTilesPosition.bTile2 + selectedDie;
        x = blueTilePath[blueTilesPosition.bTile2][0];
        y = blueTilePath[blueTilesPosition.bTile2][1];
        addPosition(x, y, blueTile2Positions);
        blueTile2();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "blueTile3") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          blueTilesPosition.bTile3 = blueTilesPosition.bTile3 + 1;
          x = blueTilePath[blueTilesPosition.bTile3][0];
          y = blueTilePath[blueTilesPosition.bTile3][1];
          addPosition(x, y, blueTile3Positions);
          blueTile3();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        blueTilesPosition.bTile3 = blueTilesPosition.bTile3 + selectedDie;
        x = blueTilePath[blueTilesPosition.bTile3][0];
        y = blueTilePath[blueTilesPosition.bTile3][1];
        addPosition(x, y, blueTile3Positions);
        blueTile3();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    } else if (selectedTile == "blueTile4") {
      if (selectedTilePosition == -1) {
        if (selectedDie == 6) {
          blueTilesPosition.bTile4 = blueTilesPosition.bTile4 + 1;
          x = blueTilePath[blueTilesPosition.bTile4][0];
          y = blueTilePath[blueTilesPosition.bTile4][1];
          addPosition(x, y, blueTile4Positions);
          blueTile4();
          clearPreviousPosition(selectedTile);
          // return true;
        } else {
          alert("choose another die");
          // return false;
        }
      } else {
        blueTilesPosition.bTile4 = blueTilesPosition.bTile4 + selectedDie;
        x = blueTilePath[blueTilesPosition.bTile4][0];
        y = blueTilePath[blueTilesPosition.bTile4][1];
        addPosition(x, y, blueTile4Positions);
        blueTile4();
        clearPreviousPosition(selectedTile);
        // return true;
      }
    }
  }
}

//the function responsible for making the selected piece move by the number of
//the first die
// function selectedDie1(turn, selectedTile, diceValue,tileColour) {
//   var tilePosition,played;
//   if (selectedTile=="redTile1") {
//     tilePosition=redTilesPosition.rTile1;
//   } else if (selectedTile=="redTile2") {
//     tilePosition=redTilesPosition.rTile2;
//   } else if (selectedTile=="redTile3") {
//     tilePosition=redTilesPosition.rTile3;
//   } else if (selectedTile=="redTile4") {
//     tilePosition=redTilesPosition.rTile4;
//   } else if (selectedTile=="greenTile1") {
//     tilePosition=greenTilesPosition.gTile1;
//   } else if (selectedTile=="greenTile2") {
//     tilePosition=greenTilesPosition.gTile2;
//   } else if (selectedTile=="greenTile3") {
//     tilePosition=greenTilesPosition.gTile3;
//   } else if (selectedTile=="greenTile4") {
//     tilePosition=greenTilesPosition.gTile4;
//   } else if (selectedTile=="yellowTile1") {
//     tilePosition=yellowTilesPosition.yTile1;
//   } else if (selectedTile=="yellowTile2") {
//     tilePosition=yellowTilesPosition.yTile2;
//   } else if (selectedTile=="yellowTile3") {
//     tilePosition=yellowTilesPosition.yTile3;
//   } else if (selectedTile=="yellowTile4") {
//     tilePosition=yellowTilesPosition.yTile4;
//   } else if (selectedTile=="blueTile1") {
//     tilePosition=blueTilesPosition.bTile1;
//   } else if (selectedTile=="blueTile2") {
//     tilePosition=blueTilesPosition.bTile2;
//   } else if (selectedTile=="blueTile3") {
//     tilePosition=blueTilesPosition.bTile3;
//   } else if (selectedTile=="blueTile4") {
//     tilePosition=blueTilesPosition.bTile4;
//   }
//   played=tileMove(turn, selectedTile, diceValue, tilePosition);
//   capture(tilePosition, tileColour);
//
//   document.getElementById('die1').style.border = "none";
//   return played;
// }

//the function responsible for making the selected piece move by the number of
//the second die
// function selectedDie2(turn, selectedTile, diceValue,tileColour) {
//   var tilePosition,played;
//
//     tilePosition=redTilesPosition.rTile1;
//
//     tilePosition=redTilesPosition.rTile2;
//
//     tilePosition=redTilesPosition.rTile3;
//
//     tilePosition=redTilesPosition.rTile4;
//
//     tilePosition=greenTilesPosition.gTile1;
//
//     tilePosition=greenTilesPosition.gTile2;
//
//     tilePosition=greenTilesPosition.gTile3;
//
//     tilePosition=greenTilesPosition.gTile4;
//
//     tilePosition=yellowTilesPosition.yTile1;
//
//     tilePosition=yellowTilesPosition.yTile2;
//
//     tilePosition=yellowTilesPosition.yTile3;
//
//     tilePosition=yellowTilesPosition.yTile4;
//
//     tilePosition=blueTilesPosition.bTile1;
//
//     tilePosition=blueTilesPosition.bTile2;
//
//     tilePosition=blueTilesPosition.bTile3;
//
//     tilePosition=blueTilesPosition.bTile4;
//
//   played=tileMove(turn, selectedTile, diceValue, tilePosition);
//   capture(tilePosition, tileColour);
//
//   document.getElementById('die2').style.border = "none";
//
//   return played;
// }

function activePlayer(currentTurn) {
  const set1= new Set([-1,56]);


  if (currentTurn=="red") {
    if (set1.has(redTilesPosition.rTile1) && set1.has(redTilesPosition.rTile2) && set1.has(redTilesPosition.rTile3) && set1.has(redTilesPosition.rTile4)) {
      return false;
    } else {
      return true;
    }
  } else if (currentTurn=="green") {
    if (set1.has(greenTilesPosition.gTile1) && set1.has(greenTilesPosition.gTile2) && set1.has(greenTilesPosition.gTile3) && set1.has(greenTilesPosition.gTile4)) {
      return false;
    } else {
      return true;
    }
  } else if (currentTurn=="yellow") {
    if (set1.has(yellowTilesPosition.yTile1) && set1.has(yellowTilesPosition.yTile2) && set1.has(yellowTilesPosition.yTile3) && set1.has(yellowTilesPosition.yTile4)) {
      return false;
    } else {
      return true;
    }
  } else if (currentTurn=="blue") {
    if (set1.has(blueTilesPosition.bTile1) && set1.has(blueTilesPosition.bTile2) && set1.has(blueTilesPosition.bTile3) && set1.has(blueTilesPosition.bTile4)) {
      return false;
    } else {
      return true;
    }
  }
}

function someActivePlayers(currentTurn) {
  if (currentTurn=="red") {
    if (redTilesPosition.rTile1 == -1 || redTilesPosition.rTile2 == -1 || redTilesPosition.rTile3 == -1 || redTilesPosition.rTile4 == -1) {
      return true;
    } else {
      return false;
    }
  } else if (currentTurn=="green") {
    if (greenTilesPosition.gTile1 == -1 || greenTilesPosition.gTile2 == -1 || greenTilesPosition.gTile3 == -1 || greenTilesPosition.gTile4 == -1) {
      return true;
    } else {
      return false;
    }
  } else if (currentTurn=="yellow") {
    if (yellowTilesPosition.yTile1 == -1 || yellowTilesPosition.yTile2 == -1 || yellowTilesPosition.yTile3 == -1 || yellowTilesPosition.yTile4 == -1) {
      return true;
    } else {
      return false;
    }
  } else if (currentTurn=="blue") {
    if (blieTilesPosition.bTile1 == -1 || blueTilesPosition.bTile2 == -1 || blueTilesPosition.bTile3 == -1 || blueTilesPosition.bTile4 == -1) {
      return true;
    } else {
      return false;
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

function highlightPiece(tile) {
    if (tile=="redTile1") {
     ctx.beginPath();
     ctx.arc(redTile1Positions[currentPosition(redTile1Positions)].x,redTile1Positions[currentPosition(redTile1Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="redTile2") {
     ctx.beginPath();
     ctx.arc(redTile2Positions[currentPosition(redTile2Positions)].x,redTile2Positions[currentPosition(redTile2Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="redTile3") {
     ctx.beginPath();
     ctx.arc(redTile3Positions[currentPosition(redTile3Positions)].x,redTile3Positions[currentPosition(redTile3Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="redTile4") {
     ctx.beginPath();
     ctx.arc(redTile4Positions[currentPosition(redTile4Positions)].x,redTile4Positions[currentPosition(redTile4Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="greenTile1") {
      ctx.beginPath();
      ctx.arc(greenTile1Positions[currentPosition(greenTile1Positions)].x,greenTile1Positions[currentPosition(greenTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "white";
      ctx.stroke();
    } else if (tile=="greenTile2") {
      ctx.beginPath();
      ctx.arc(greenTile2Positions[currentPosition(greenTile2Positions)].x,greenTile2Positions[currentPosition(greenTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "white";
      ctx.stroke();
    } else if (tile=="greenTile3") {
      ctx.beginPath();
      ctx.arc(greenTile3Positions[currentPosition(greenTile3Positions)].x,greenTile3Positions[currentPosition(greenTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "white";
      ctx.stroke();
    } else if (tile=="greenTile4") {
      ctx.beginPath();
      ctx.arc(greenTile4Positions[currentPosition(greenTile4Positions)].x,greenTile4Positions[currentPosition(greenTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "white";
      ctx.stroke();
    } else if (tile=="yellowTile1") {
     ctx.beginPath();
     ctx.arc(yellowTile1Positions[currentPosition(yellowTile1Positions)].x,yellowTile1Positions[currentPosition(yellowTile1Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="yellowTile2") {
     ctx.beginPath();
     ctx.arc(yellowTile2Positions[currentPosition(yellowTile2Positions)].x,yellowTile2Positions[currentPosition(yellowTile2Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="yellowTile3") {
     ctx.beginPath();
     ctx.arc(yellowTile3Positions[currentPosition(yellowTile3Positions)].x,yellowTile3Positions[currentPosition(yellowTile3Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="yellowTile4") {
     ctx.beginPath();
     ctx.arc(yellowTile4Positions[currentPosition(yellowTile4Positions)].x,yellowTile4Positions[currentPosition(yellowTile4Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="blueTile1") {
     ctx.beginPath();
     ctx.arc(blueTile1Positions[currentPosition(blueTile1Positions)].x,blueTile1Positions[currentPosition(blueTile1Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="blueTile2") {
     ctx.beginPath();
     ctx.arc(blueTile2Positions[currentPosition(blueTile2Positions)].x,blueTile2Positions[currentPosition(blueTile2Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="blueTile3") {
     ctx.beginPath();
     ctx.arc(blueTile3Positions[currentPosition(blueTile3Positions)].x,blueTile3Positions[currentPosition(blueTile3Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   } else if (tile=="blueTile4") {
     ctx.beginPath();
     ctx.arc(blueTile4Positions[currentPosition(blueTile4Positions)].x,blueTile4Positions[currentPosition(blueTile4Positions)].y,20,0,2*Math.PI);
     ctx.closePath();
     ctx.strokeStyle= "white";
     ctx.stroke();
   }
}

function unhighlightPieces(currentTurn,tile1,tile2,tile3,tile4) {
  if (tile1==true) {
    if (currentTurn=="red") {
      ctx.beginPath();
      ctx.arc(redTile1Positions[currentPosition(redTile1Positions)].x,redTile1Positions[currentPosition(redTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if(currentTurn=="green") {
      ctx.beginPath();
      ctx.arc(greenTile1Positions[currentPosition(greenTile1Positions)].x,greenTile1Positions[currentPosition(greenTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if (currentTurn=="yellow") {
      ctx.beginPath();
      ctx.arc(yellowTile1Positions[currentPosition(yellowTile1Positions)].x,yellowTile1Positions[currentPosition(yellowTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if (currentTurn=="blue") {
      ctx.beginPath();
      ctx.arc(blueTile1Positions[currentPosition(blueTile1Positions)].x,blueTile1Positions[currentPosition(blueTile1Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    }
  }
  if (tile2==true) {
    if (currentTurn=="red") {
      ctx.beginPath();
      ctx.arc(redTile2Positions[currentPosition(redTile2Positions)].x,redTile2Positions[currentPosition(redTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if(currentTurn=="green") {
      ctx.beginPath();
      ctx.arc(greenTile2Positions[currentPosition(greenTile2Positions)].x,greenTile2Positions[currentPosition(greenTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if (currentTurn=="yellow") {
      ctx.beginPath();
      ctx.arc(yellowTile2Positions[currentPosition(yellowTile2Positions)].x,yellowTile2Positions[currentPosition(yellowTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if (currentTurn=="blue") {
      ctx.beginPath();
      ctx.arc(blueTile2Positions[currentPosition(blueTile2Positions)].x,blueTile2Positions[currentPosition(blueTile2Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    }
  }
  if (tile3==true) {
    if (currentTurn=="red") {
      ctx.beginPath();
      ctx.arc(redTile3Positions[currentPosition(redTile3Positions)].x,redTile3Positions[currentPosition(redTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if(currentTurn=="green") {
      ctx.beginPath();
      ctx.arc(greenTile3Positions[currentPosition(greenTile3Positions)].x,greenTile3Positions[currentPosition(greenTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if (currentTurn=="yellow") {
      ctx.beginPath();
      ctx.arc(yellowTile3Positions[currentPosition(yellowTile3Positions)].x,yellowTile3Positions[currentPosition(yellowTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if (currentTurn=="blue") {
      ctx.beginPath();
      ctx.arc(blueTile3Positions[currentPosition(blueTile3Positions)].x,blueTile3Positions[currentPosition(blueTile3Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    }
  }
  if (tile4==true) {
    if (currentTurn=="red") {
      ctx.beginPath();
      ctx.arc(redTile4Positions[currentPosition(redTile4Positions)].x,redTile4Positions[currentPosition(redTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if(currentTurn=="green") {
      ctx.beginPath();
      ctx.arc(greenTile4Positions[currentPosition(greenTile4Positions)].x,greenTile4Positions[currentPosition(greenTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if (currentTurn=="yellow") {
      ctx.beginPath();
      ctx.arc(yellowTile4Positions[currentPosition(yellowTile4Positions)].x,yellowTile4Positions[currentPosition(yellowTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    } else if (currentTurn=="blue") {
      ctx.beginPath();
      ctx.arc(blueTile4Positions[currentPosition(blueTile4Positions)].x,blueTile4Positions[currentPosition(blueTile4Positions)].y,20,0,2*Math.PI);
      ctx.closePath();
      ctx.strokeStyle= "black";
      ctx.stroke();
    }
  }
}

function checkForValidPlays(currentTurn,selectedDieValue) {
  var validPlays={tile1:false,tile2:false,tile3:false,tile4:false,noValidPlay:function () {
    if (this.tile1==false && this.tile2==false && this.tile3==false && this.tile4==false) {
      return true;
    } else {
      return false;
    }
  }};
  if (currentTurn=="red") {
    if (redTilesPosition.rTile1!=-1) {
      if (redTilesPosition.rTile1+selectedDieValue<=56) {
        validPlays.tile1=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile1=true;
      }
    }
    if (redTilesPosition.rTile2!=-1) {
      if (redTilesPosition.rTile2+selectedDieValue<=56) {
        validPlays.tile2=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile2=true;
      }
    }
    if (redTilesPosition.rTile3!=-1) {
      if (redTilesPosition.rTile3+selectedDieValue<=56) {
        validPlays.tile3=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile3=true;
      }
    }
    if (redTilesPosition.rTile4==-1) {
      if (redTilesPosition.rTile4+selectedDieValue<=56) {
        validPlays.tile4=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile4=true;
      }
    }
  } else if (currentTurn=="green") {
    if (greenTilesPosition.gTile1!=-1) {
      if (greenTilesPosition.gTile1+selectedDieValue<=56) {
        validPlays.tile1=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile1=true;
      }
    }
    if (greenTilesPosition.gTile2!=-1) {
      if (greenTilesPosition.gTile2+selectedDieValue<=56) {
        validPlays.tile2=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile2=true;
      }
    }
    if (greenTilesPosition.gTile3!=-1) {
      if (greenTilesPosition.gTile3+selectedDieValue<=56) {
        validPlays.tile3=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile3=true;
      }
    }
    if (greenTilesPosition.gTile4==-1) {
      if (greenTilesPosition.gTile4+selectedDieValue<=56) {
        validPlays.tile4=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile4=true;
      }
    }
  } else if (currentTurn=="yellow") {
    if (yellowTilesPosition.yTile1!=-1) {
      if (yellowTilesPosition.yTile1+selectedDieValue<=56) {
        validPlays.tile1=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile1=true;
      }
    }
    if (yellowTilesPosition.yTile2!=-1) {
      if (yellowTilesPosition.yTile2+selectedDieValue<=56) {
        validPlays.tile2=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile2=true;
      }
    }
    if (yellowTilesPosition.yTile3!=-1) {
      if (yellowTilesPosition.yTile3+selectedDieValue<=56) {
        validPlays.tile3=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile3=true;
      }
    }
    if (yellowTilesPosition.yTile4==-1) {
      if (yellowTilesPosition.yTile4+selectedDieValue<=56) {
        validPlays.tile4=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile4=true;
      }
    }
  } else if (currentTurn=="blue") {
    if (blueTilesPosition.bTile1!=-1) {
      if (blueTilesPosition.bTile1+selectedDieValue<=56) {
        validPlays.tile1=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile1=true;
      }
    }
    if (blueTilesPosition.bTile2!=-1) {
      if (blueTilesPosition.bTile2+selectedDieValue<=56) {
        validPlays.tile2=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile2=true;
      }
    }
    if (blueTilesPosition.bTile3!=-1) {
      if (blueTilesPosition.bTile3+selectedDieValue<=56) {
        validPlays.tile3=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile3=true;
      }
    }
    if (blueTilesPosition.bTile4!=-1) {
      if (blueTilesPosition.bTile4+selectedDieValue<=56) {
        validPlays.tile4=true;
      }
    } else {
      if (selectedDieValue==6) {
        validPlays.tile4=true;
      }
    }
  }
  return validPlays;
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

var selectedPiece,currentPlayer;
// this function identifies the position of the tile and returns the corresponding
// tile occupying the position clicked upon
function selectedTile(event,validity) {
  // var currentPlayer;
  const pos = {
    x: event.clientX,
    y: event.clientY
  };
  selectedPiece = "none";
  if (currentPlayer=="red") {
    if (tile(pos, redTile1Positions)) {
      if (validity.tile1==true) {
        selectedPiece = "redTile1";
      }
   } else if (tile(pos, redTile2Positions)) {
     if (validity.tile2==true) {
       selectedPiece = "redTile2";
     }
   } else if (tile(pos, redTile3Positions)) {
     if (validity.tile3==true) {
       selectedPiece = "redTile3";
     }
   } else if (tile(pos, redTile4Positions)) {
     if (validity.tile4==true) {
       selectedPiece = "redTile4";
     }
   }
  } else if (currentPlayer=="green") {
    if (tile(pos, greenTile1Positions)) {
      if (validity.tile1==true) {
        selectedPiece = "greenTile1";
      }
    } else if (tile(pos, greenTile2Positions)) {
      if (validity.tile2==true) {
        selectedPiece = "greenTile2";
      }
    } else if (tile(pos, greenTile3Positions)) {
      if (validity.tile3==true) {
        selectedPiece = "greenTile3";
      }
    } else if (tile(pos, greenTile4Positions)) {
      if (validity.tile4==true) {
        selectedPiece = "greenTile4";
      }
    }
  } else if (currentPlayer=="yellow") {
    if (tile(pos, yellowTile1Positions)) {
      if (validity.tile1==true) {
        selectedPiece = "yellowTile1";
      }
   } else if (tile(pos, yellowTile2Positions)) {
     if (validity.tile2==true) {
       selectedPiece = "yellowTile2";
     }
   } else if (tile(pos, yellowTile3Positions)) {
     if (validity.tile3==true) {
       selectedPiece = "yellowTile3";
     }
   } else if (tile(pos, yellowTile4Positions)) {
     if (validity.tile4==true) {
       selectedPiece = "yellowTile4";
     }
   }
  } else if (currentPlayer=="blue") {
    if (tile(pos, blueTile1Positions)) {
      if (validity.tile1==true) {
        selectedPiece = "blueTile1";
      }
   } else if (tile(pos, blueTile2Positions)) {
     if (validity.tile2==true) {
       selectedPiece = "blueTile2";
     }
   } else if (tile(pos, blueTile3Positions)) {
     if (validity.tile3==true) {
       selectedPiece = "blueTile3";
     }
   } else if (tile(pos, blueTile4Positions)) {
     if (validity.tile4==true) {
       selectedPiece = "blueTile4";
     }
   }
  }
  // return selectedPiece;
}

function tileValidityReset() {
  tileValidity.tile1=false;
  tileValidity.tile2=false;
  tileValidity.tile3=false;
  tileValidity.tile4=false;
}

function hightlightPlayer(nextPlayer) {
  // hightlight the current player
  if (nextPlayer=="red") {
    document.getElementById('bTile').style.visibility = 'hidden';
    document.getElementById('rTile').style.visibility = 'visible';
  } else if (nextPlayer == "green") {
    document.getElementById('rTile').style.visibility = 'hidden';
    document.getElementById('gTile').style.visibility = 'visible';
  } else if (nextPlayer == "yellow") {
    document.getElementById('gTile').style.visibility = 'hidden';
    document.getElementById('yTile').style.visibility = 'visible';
  } else if (nextPlayer == "blue") {
    document.getElementById('yTile').style.visibility = 'hidden';
    document.getElementById('bTile').style.visibility = 'visible';
  }
}
function nextPlayer(turn) {
  var nextPlayer;
  if (turn=="red") {
    nextPlayer="green";
  } else if (turn=="green") {
    nextPlayer="yellow";
  } else if (turn=="yellow") {
    nextPlayer="blue";
  } else if (turn=="blue") {
    nextPlayer="red";
  }


  return nextPlayer;
}

function hightlightDie(turn,die) {
  if (die=="die1") {
    if (turn=="red") {
      document.getElementById('die1').style.border = "thick solid red";
    } else if (turn=="green") {
      document.getElementById('die1').style.border = "thick solid green";
    } else if (turn=="yellow") {
      document.getElementById('die1').style.border = "thick solid yellow";
    } else if (turn=="blue") {
      document.getElementById('die1').style.border = "thick solid blue";
    }
  } else {
    if (turn=="red") {
      document.getElementById('die2').style.border = "thick solid red";
    } else if (turn=="green") {
      document.getElementById('die2').style.border = "thick solid green";
    } else if (turn=="yellow") {
      document.getElementById('die2').style.border = "thick solid yellow";
    } else if (turn=="blue") {
      document.getElementById('die2').style.border = "thick solid blue";
    }
  }
}

function movePiece(turn,piece,dieValue) {
  var tilePosition;
  if (piece!="none") {
    if (turn=="red") {
      if (piece=="redTile1") {
        tilePosition=redTilesPosition.rTile1;
      } else if (piece=="redTile2") {
        tilePosition=redTilesPosition.rTile2;
      } else if (piece=="redTile3") {
        tilePosition=redTilesPosition.rTile3;
      } else if (piece=="redTile4") {
        tilePosition=redTilesPosition.rTile4;
      }
      tileMove(turn, piece, dieValue, tilePosition);
    } else if (turn=="green") {
      if (piece=="greenTile1") {
        tilePosition=greenTilesPosition.gTile1;
      } else if (piece=="greenTile2") {
        tilePosition=greenTilesPosition.gTile2;
      } else if (piece=="greenTile3") {
        tilePosition=greenTilesPosition.gTile3;
      } else if (piece=="greenTile4") {
        tilePosition=greenTilesPosition.gTile4;
      }
      tileMove(turn, piece, dieValue, tilePosition);
    } else if (turn=="yellow") {
      if (piece=="yellowTile1") {
        tilePosition=yellowTilesPosition.yTile1;
      } else if (piece=="yellowTile2") {
        tilePosition=yellowTilesPosition.yTile2;
      } else if (piece=="yellowTile3") {
        tilePosition=yellowTilesPosition.yTile3;
      } else if (piece=="yellowTile4") {
        tilePosition=yellowTilesPosition.yTile4;
      }
      tileMove(turn, piece, dieValue, tilePosition);
    } else if (turn=="blue") {
      if (piece=="blueTile1") {
        tilePosition=blueTilesPosition.bTile1;
      } else if (piece=="blueTile2") {
        tilePosition=blueTilesPosition.bTile2;
      } else if (piece=="blueTile3") {
        tilePosition=blueTilesPosition.bTile3;
      } else if (piece=="blueTile4") {
        tilePosition=blueTilesPosition.bTile4;
      }
      tileMove(turn, piece, dieValue, tilePosition);
    }
  }
}

function selectPiece(turn,dieValue) {

  var piece,validity;
  validity=checkForValidPlays(turn,dieValue);
  canvas.addEventListener('click',function (event) {
    piece=selectedTile(event,validity);
    movePiece(turn,piece,dieValue);
  }, false);
}
// the game sequence
function theGame() {
  var turn="red",gameOver=false,playAgainCounter=0,diceValue,winner;
  var die1Played=false,die2Played=false,die1Clicked=false,die2Clicked=false;
  // document.getElementById('saveGame').addEventListener("click",saveGameMenu(),false);
  // document.getElementById('exitGameOption').addEventListener("click",exitGameMenu(),false);
  alert("before document.get.....");
  document.getElementById('menu').style.visibility = "hidden";
  document.getElementById('ludo_game').style.visibility = 'visible';
  // turn=startingPlayer()

  hightlightPlayer(turn);

  var validPlay,tileColour;
  exitGame=false;
  // alert("Before While Loop");
  var values;
  while (gameOver==false && exitGame==false) {
    // alert("before click");
      document.getElementById('diceRoll').addEventListener("click",function () {
        values=rollDice();
        alert(turn);
        if (activePlayer(turn)==false && values[0]!=6) {
          alert("no valid move");
          // currentPlayer=turn;
          turn=nextPlayer(turn);
        } else {
          alert("make a move");

          document.getElementById('die1').addEventListener("click", function () {
            // die1Clicked=true;
            hightlightDie(turn,"die1");
            // selectPiece(turn,values[0]);
          }, false);

          document.getElementById('die2').addEventListener("click", function () {
            // die2Clicked=true;
            hightlightDie(turn,"die2");
            // selectPiece(turn,values[1]);
          }, false);
          // turn=nextPlayer(turn);
        }
        hightlightPlayer(turn);
        // alert("roll dice clicked");
      },false);
      // alert(globalDie1 + "-" + globalDie2);
      // winner=determineWinner();
      // alert(winner);
      // alert("before winner eval");
      // if (winner!="none") {
      //   gameOver=true;
      //   exitGame=true;
      // }
      gameOver=true;
      exitGame=true;
  }
  // alert("after while loop"+" "+winner);
  //   currentPlayer=turn;
  //   alert("turn initialised");
  //   document.getElementById('diceRoll').addEventListener("click",function () {
  //     if (turn=="red") {
  //       alert("turn is red");
  //       tileColour="redTile";
  //       document.getElementById('diceRoll').disabled=true;
  //       rollDiceAnimation();
  //       diceValue=rollDice();
  //       if (activePlayer(turn)==false && checkIfPlayerCanStart(diceValue)==false) {
  //         turn="green";
  //         document.getElementById('rTile').style.visibility = 'hidden';
  //         document.getElementById('gTile').style.visibility = 'visible';
  //       } else {
  //         while (die1Played==false && die2Played==false && checkForValidPlays(turn,diceValue[0]).noValidPlay==false && checkForValidPlays(turn,diceValue[1]).noValidPlay==false) {
  //           validPlay=checkForValidPlays(turn,diceValue[0]);
  //           if (validPlay.noValidPlay==false && die1Played==false) {
  //             document.getElementById('die1').disabled=false;
  //             document.getElementById('die1').style.border = "thick solid red";
  //             document.getElementById('die1').addEventListener("click", function () {
  //               die1Clicked=true;
  //               document.getElementById('die1').style.border = "thick solid red";
  //             }, false);
  //
  //             if (die1Clicked==true) {
  //               if (validPlay.tile1==true) {
  //                 highlightPiece("redTile1");
  //                 tileValidity.tile1=true;
  //               }
  //               if (validPlay.tile2==true) {
  //                 highlightPiece("redTile2");
  //                 tileValidity.tile2=true;
  //               }
  //               if (validPlay.tile3==true) {
  //                 highlightPiece("redTile3");
  //                 tileValidity.tile3=true;
  //               }
  //               if (validPlay.tile4==true) {
  //                 highlightPiece("redTile4");
  //                 tileValidity.tile4=true;
  //               }
  //
  //               while (selectedPiece=="none" && die1Played==false) {
  //                 if (selectedPiece!="none") {
  //                   die1Played=selectedDie1(turn, selectedPiece, diceValue[0], tilePosition, tileColour);
  //                 }
  //               }
  //               unhighlightPieces(turn,validPlay.tile1,validPlay.tile2,validPlay.tile3,validPlay.tile4);
  //               tileValidityReset();
  //               // selectedPiece="none";
  //             }
  //           }
  //
  //           document.getElementById('die1').style.border = "none";
  //           document.getElementById('die1').disabled=true;
  //
  //
  //           validPlay=checkForValidPlays(turn,diceValue[1]);
  //           if (validPlay.noValidPlay==false && die2Played==false) {
  //             document.getElementById('die2').disabled=false;
  //             document.getElementById('die2').addEventListener("click", function () {
  //               die2Clicked=true;
  //               document.getElementById('die2').style.border = "thick solid red";
  //             }, false);
  //
  //             if (die2Clicked==true) {
  //               if (validPlay.tile1==true) {
  //                 highlightPiece("redTile1");
  //                 tileValidity.tile1=true;
  //               }
  //               if (validPlay.tile2==true) {
  //                 highlightPiece("redTile2");
  //                 tileValidity.tile2=true;
  //               }
  //               if (validPlay.tile3==true) {
  //                 highlightPiece("redTile3");
  //                 tileValidity.tile3=true;
  //               }
  //               if (validPlay.tile4==true) {
  //                 highlightPiece("redTile4");
  //                 tileValidity.tile4=true;
  //               }
  //
  //               while (selectedPiece=="none" && die2Played==false) {
  //                 if (selectedPiece!="none") {
  //                   die2Played=selectedDie2(turn, selectedPiece, diceValue[1], tilePosition, tileColour);
  //                 }
  //               }
  //               unhighlightPieces(turn,validPlay.tile1,validPlay.tile2,validPlay.tile3,validPlay.tile4);
  //               tileValidityReset();
  //               // selectedPiece="none";
  //             }
  //           }
  //
  //           document.getElementById('die2').style.border = "none";
  //           document.getElementById('die2').disabled=true;
  //         }
  //
  //
  //         winner=determineWinner();
  //         if (winner!="none") {
  //           gameOver=true;
  //         }
  //         if (canPlayerPlayAgain(diceValue)==true && playAgainCounter < 3) {
  //           turn="red";
  //           playAgainCounter++;
  //         } else {
  //           turn="green";
  //           document.getElementById('rTile').style.visibility = 'hidden';
  //           document.getElementById('gTile').style.visibility = 'visible';
  //           playAgainCounter=0;
  //         }
  //       }
  //     } else if (turn == "green") {
  //
  //     } else if (turn == "yellow") {
  //
  //     } else if (turn == "blue") {
  //
  //     }
  //   },false);
  //   // document.getElementById('diceRoll').disabled=false;
  //   // // document.getElementById('diceRoll').disabled=false;
  // }
  // document.getElementById('winner').style.visibility = 'visible';
}
