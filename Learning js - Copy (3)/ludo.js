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
  }
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
//roll dice
function rollDice(){
  var diceValue1=Math.floor((Math.random()*6) + 1),
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


  document.getElementById('die1').src='Images/'+ diceValue1 +'.jpg';
  document.getElementById('die2').src='Images/'+ diceValue2 +'.jpg';

  return [diceValue1,diceValue2];
}
// roll dice animation
function rollDiceAnimation() {
  var timer;
  if (isNaN(time)) {
    for (var i = 0; i < defaultTime;i+500) {
      // i=i+500;
      timer=setTimeout(rollDice(),i);
    }
    clearTimeOut(timer);
  } else {
    for (var i = 0; i < time;i+500) {
      // i=i+500;
      timer=setTimeout(rollDice(),i);
    }
    clearTimeOut(timer);
  }

}
// the function for the save game button
// that displays the menu for saving the game
function saveGameMenu() {
  document.getElementById("saveGameBox").style.visibility="visible";
}
// the function for the save game button
// saves the current progress made on the game for later use
function saveGame() {
  var Input=document.getElementById("gameName").value,savedGameName;
  var storedGames;
  if (input==null || input=="") {
    document.getElementById("errorMsg").innerHTML="Invalid  Input. Re-enter value";
  } else {
    savedGameName=input;

  }
}
function resumeGame(page) {
  document.getElementById('ludo_game').style.visibility="visible";
  document.getElementById(page).style.visibility='hidden';
  if (page=="saveGameBox") {
    document.getElementById("sgerrorMsg").innerHTML="";
  }
}
// the function for the exit game button
// returns from the game page to the main menu and resets the board to it's defaul state
function exitGame() {
  document.getElementById('menu').style.visibility="visible";
  document.getElementById('ludo_game').style.visibility='hidden';
  document.getElementById('bTile').style.visibility = 'hidden';
  document.getElementById('yTile').style.visibility = 'hidden';
  document.getElementById('gTile').style.visibility = 'hidden';
  document.getElementById('rTile').style.visibility = 'hidden';
}
// the function for the exit game button
// that displays the menu for exiting the game
function exitGameMenu() {
  document.getElementById("exitGameBox").style.visibility="visible";
}

var turn,redDiceValue,yellowDiceValue,greenDiceValue,blueDiceValue,selectedPiece,chosenDie1,chosenDie2,played;

//the canvas initialisation
const canvas=document.getElementById('boardCanvas');
const ctx=canvas.getContext('2d');
// canvas.addEventListener('click',function (event) {
//   selectedTile(event);
// }, false);


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

//all the pieces:
var greenTile1,greenTile2,greenTile3, greenTile4,redTile1,redTile2,redTile3,redTile4,yellowTile1,yellowTile2,yellowTile3,yellowTile4,blueTile1,blueTile2,blueTile3,blueTile4;
//green tiles
greenTile1=(function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile1Positions[currentPosition(greenTile1Positions)].x,greenTile1Positions[currentPosition(greenTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

greenTile2=(function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile2Positions[currentPosition(greenTile2Positions)].x,greenTile2Positions[currentPosition(greenTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

greenTile3=(function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile3Positions[currentPosition(greenTile3Positions)].x,greenTile3Positions[currentPosition(greenTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

greenTile4=(function() {
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.arc(greenTile4Positions[currentPosition(greenTile4Positions)].x,greenTile4Positions[currentPosition(greenTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());


//red tiles
redTile1=(function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile1Positions[currentPosition(redTile1Positions)].x,redTile1Positions[currentPosition(redTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

redTile2=(function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile2Positions[currentPosition(redTile2Positions)].x,redTile2Positions[currentPosition(redTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

redTile3=(function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile3Positions[currentPosition(redTile3Positions)].x,redTile3Positions[currentPosition(redTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

redTile4=(function() {
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.arc(redTile4Positions[currentPosition(redTile4Positions)].x,redTile4Positions[currentPosition(redTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());


//yellow tiles
yellowTile1=(function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile1Positions[currentPosition(yellowTile1Positions)].x,yellowTile1Positions[currentPosition(yellowTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

yellowTile2=(function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile2Positions[currentPosition(yellowTile2Positions)].x,yellowTile2Positions[currentPosition(yellowTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

yellowTile3=(function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile3Positions[currentPosition(yellowTile3Positions)].x,yellowTile3Positions[currentPosition(yellowTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

yellowTile4=(function() {
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.arc(yellowTile4Positions[currentPosition(yellowTile4Positions)].x,yellowTile4Positions[currentPosition(yellowTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());


//blue tiles
blueTile1=(function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile1Positions[currentPosition(blueTile1Positions)].x,blueTile1Positions[currentPosition(blueTile1Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

blueTile2=(function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile2Positions[currentPosition(blueTile2Positions)].x,blueTile2Positions[currentPosition(blueTile2Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

blueTile3=(function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile3Positions[currentPosition(blueTile3Positions)].x,blueTile3Positions[currentPosition(blueTile3Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

blueTile4=(function() {
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.arc(blueTile4Positions[currentPosition(blueTile4Positions)].x,blueTile4Positions[currentPosition(blueTile4Positions)].y,20,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }());

// to reset the whole game back to default state after exit
function reset() {
  removePositions(redTile1Positions);
  removePositions(redTile2Positions);
  removePositions(redTile3Positions);
  removePositions(redTile4Positions);
  removePositions(greenTile1Positions);
  removePositions(greenTile2Positions);
  removePositions(greenTile3Positions);
  removePositions(greenTile4Positions);
  removePositions(yellowTile1Positions);
  removePositions(yellowTile2Positions);
  removePositions(yellowTile3Positions);
  removePositions(yellowTile4Positions);
  removePositions(blueTile1Positions);
  removePositions(blueTile2Positions);
  removePositions(blueTile3Positions);
  removePositions(blueTile4Positions);
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
  var currentPlayer;
  const pos = {
    x: event.clientX,
    y: event.clientY
  };
  selectedPiece = "none";
  if (currentPlayer=="red") {
    if (tile(pos, redTile1Positions)) {
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
   }
  } else if (currentPlayer=="green") {
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
    }
  } else if (currentPlayer=="yellow") {
    if (tile(pos, yellowTile1Positions)) {
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
   }
  } else if (currentPlayer=="blue") {
    if (tile(pos, blueTile1Positions)) {
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
  }
  return selectedPiece;
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

//the function responsible for making the selected piece move by the number of
//the first die
function selectedDie1(turn, selectedTile, diceValue,tilePosition,tileColour) {
  tileMove(turn, selectedTile, diceValue[0], tilePosition);
  // capture(tilePosition, tileColour);

  document.getElementById('die1').style.border = "none";
}

//the function responsible for making the selected piece move by the number of
//the second die
function selectedDie2(turn, selectedTile, diceValue,tilePosition,tileColour) {
  tileMove(turn, selectedTile, diceValue[1], tilePosition);
  // capture(tilePosition, tileColour);

  document.getElementById('die2').style.border = "none";
}

function activePlayer(turn) {
  if (turn=="red") {
    if (redTilesPosition.rTile1 == -1 && redTilesPosition.rTile2 == -1 && redTilesPosition.rTile3 == -1 && redTilesPosition.rTile4 == -1) {
      return true;
    } else {
      return false;
    }
  } else if (turn=="green") {
    if (greenTilesPosition.gTile1 == -1 && greenTilesPosition.gTile2 == -1 && greenTilesPosition.gTile3 == -1 && greenTilesPosition.gTile4 == -1) {
      return true;
    } else {
      return false;
    }
  } else if (turn=="yellow") {
    if (yellowTilesPosition.yTile1 == -1 && yellowTilesPosition.yTile2 == -1 && yellowTilesPosition.yTile3 == -1 && yellowTilesPosition.yTile4 == -1) {
      return true;
    } else {
      return false;
    }
  } else if (turn=="blue") {
    if (blieTilesPosition.bTile1 == -1 && blueTilesPosition.bTile2 == -1 && blueTilesPosition.bTile3 == -1 && blueTilesPosition.bTile4 == -1) {
      return true;
    } else {
      return false;
    }
  }
}

function someActivePlayers(turn) {
  if (turn=="red") {
    if (redTilesPosition.rTile1 == -1 || redTilesPosition.rTile2 == -1 || redTilesPosition.rTile3 == -1 || redTilesPosition.rTile4 == -1) {
      return true;
    } else {
      return false;
    }
  } else if (turn=="green") {
    if (greenTilesPosition.gTile1 == -1 || greenTilesPosition.gTile2 == -1 || greenTilesPosition.gTile3 == -1 || greenTilesPosition.gTile4 == -1) {
      return true;
    } else {
      return false;
    }
  } else if (turn=="yellow") {
    if (yellowTilesPosition.yTile1 == -1 || yellowTilesPosition.yTile2 == -1 || yellowTilesPosition.yTile3 == -1 || yellowTilesPosition.yTile4 == -1) {
      return true;
    } else {
      return false;
    }
  } else if (turn=="blue") {
    if (blieTilesPosition.bTile1 == -1 || blueTilesPosition.bTile2 == -1 || blueTilesPosition.bTile3 == -1 || blueTilesPosition.bTile4 == -1) {
      return true;
    } else {
      return false;
    }
  }
}

var die1Played,die2Played,die1Clicked,die2Clicked;
// the game sequence
function theGame() {
  turn=startingPlayer();
  var gameOver=false,exitGame=false,playAgainCounter=0;
  document.getElementById('saveGame').addEventListener("click",saveGameMenu(),false);
  document.getElementById('exitGameOption').addEventListener("click",exitGameMenu(),false);
  document.getElementById('menu').style.visibility = "hidden";
  document.getElementById('ludo_game').style.visibility = 'visible';
  
  if (turn=="red") {
    document.getElementById('rTile').style.visibility = 'visible';
  } else if (turn == "green") {
    document.getElementById('yTile').style.visibility = 'visible';
  } else if (turn == "yellow") {
    document.getElementById('bTile').style.visibility = 'visible';
  } else if (turn == "blue") {
    document.getElementById('rTile').style.visibility = 'visible';
  }

  do {

      document.getElementById('diceRoll').addEventListener("click",function () {
        if (turn == "red") {
          rollDiceAnimation();
          redDiceValue=rollDice();
          if (activePlayer(turn)==false && checkIfPlayerCanStart(redDiceValue)==false) {
            turn="green";
            document.getElementById('rTile').style.visibility = 'hidden';
            document.getElementById('gTile').style.visibility = 'visible';
          } else {
            if (someActivePlayers(turn)==true) {
              if (redDiceValue[0]==6 && redDiceValue[1]==6) {
                document.getElementById('die1').addEventListener("click", function () {
                  die1Clicked=true;
                  document.getElementById('die1').style.border = "thick solid red";
                }, {once: true});

                document.getElementById('die2').addEventListener("click", function () {
                  die2Clicked=true;
                  document.getElementById('die2').style.border = "thick solid red";
                }, {once: true});

                if (die1Clicked==true) {

                  selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour);
                  die1Played=true;
                } else if (die2Clicked==true) {

                  selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour);
                  die2Played=true;
                }


              }

            } else if (redDiceValue[0]==6 && redDiceValue[1]!=6) {

            } else {
              if (redDiceValue[0]==6 && redDiceValue[1]==6) {
                document.getElementById('die1').addEventListener("click", function () {
                  die1Clicked=true;
                }, {once: true});

                document.getElementById('die2').addEventListener("click", function () {
                  die2Clicked=true;
                }, {once: true});

                if (die1Clicked==true) {
                  document.getElementById('die1').style.border = "thick solid red";
                  selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour);
                  die1Played=true;
                } else if (die2Clicked==true) {
                  document.getElementById('die2').style.border = "thick solid red";
                  selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour);
                  die2Played=true;
                }


              }
            }

            if (canPlayerPlayAgain(redDiceValue)==true && playAgainCounter < 3) {
              turn="red";
              playAgainCounter++;
            } else {
              turn="green";
              document.getElementById('rTile').style.visibility = 'hidden';
              document.getElementById('gTile').style.visibility = 'visible';
              playAgainCounter=0;
            }
            // document.getElementById('die1').addEventListener("click", function () {
            //   document.getElementById('die1').style.border = "thick solid red";
            //   // selectedDie1(turn, selectedTile, diceValue, tilePosition, tileColour);
            //   die1Played=true;
            // }, {once: true});
            //
            // document.getElementById('die2').addEventListener("click", function () {
            //   document.getElementById('die2').style.border = "thick solid red";
            //   // selectedDie2(turn, selectedTile, diceValue, tilePosition, tileColour);
            //   die2Played=true;
            // }, {once: true});
          }
        } else if (turn == "green") {

          turn = "yellow";
          document.getElementById('gTile').style.visibility = 'hidden';
          document.getElementById('yTile').style.visibility = 'visible';
        } else if (turn == "yellow") {

          turn = "blue";
          document.getElementById('yTile').style.visibility = 'hidden';
          document.getElementById('bTile').style.visibility = 'visible';
        } else if (turn == "blue") {

          turn = "red";
          document.getElementById('bTile').style.visibility = 'hidden';
          document.getElementById('rTile').style.visibility = 'visible';
        }

      },false);

  } while (gameOver==false && exitGame==false);
}
