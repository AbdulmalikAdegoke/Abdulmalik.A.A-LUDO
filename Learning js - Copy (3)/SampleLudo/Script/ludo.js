var redTile;
var yellowTile;
var blueTile;
var greenTile;

var redPosition=0;
var bluePosition=0;
var greenPosition=0;
var yellowPosition=0;

var board=[
            [3,3,0,0,1,1,4,0,0,4,4]
            [3,3,0,0,1,4,1,0,0,4,4]
            [0,0,0,0,1,4,1,0,0,0,0]
            [0,0,0,0,1,4,1,0,0,0,0]
            [3,1,1,1,1,4,1,1,1,1,1]
            [1,3,3,3,3,0,5,5,5,5,1]
            [1,1,1,1,1,2,1,1,1,1,5]
            [0,0,0,0,1,2,1,0,0,0,0]
            [0,0,0,0,1,2,1,0,0,0,0]
            [2,2,0,0,1,2,1,0,0,5,5]
            [2,2,0,0,2,1,1,0,0,5,5]
];

var redTilePath=[[4,10],[4,9],[4,8],[4,7],[4,6],[3,6],[2,6],[1,6],[0,6],[0,5],
                [0,4],[1,4],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0],[5,0],
                [6,0],[6,1],[6,2],[6,3],[6,4],[7,4],[8,4],[9,4],[10,4],[10,5],
                [10,6],[9,6],[8,6],[7,6],[6,6],[6,7],[6,8],[6,9],[6,10],[5,10],
                [5,9],[5,8],[5,7],[5,6],[5,5]
];
var yellowTilePath=[[,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                    [,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                    [,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                    [,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                    [,],[,],[,],[,],[,]
];
var blueTilePath=[[,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                [,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                [,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                [,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                [,],[,],[,],[,],[,]
];
var greenTilePath=[[,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                [,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                [,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                [,],[,],[,],[,],[,],[,],[,],[,],[,],[,],
                [,],[,],[,],[,],[,]
];
/* consider an array to store the dice values */
// var diceValue;

function (){

}
function (){

}
function setBoardPositions(){

}
/* Dice functions */
function rollDice(){
  var diceValue;
  var diceValue1;
  var diceValue2;
  diceValue1=Math.Floor((Math.Random()*6)+1);
  diceValue2=Math.Floor((Math.Random()*6)+1);

  diceValue=[diceValue1,diceValue2]
  var firstDie=diceValue[0].toString();
  var secondDie=diceValue[1].toString();

  document.getElemntById('die1').src=firstDie;
  document.getElemntById('die2').src=secondDie;

  return diceValue;
}
function diceShake(){
  var time=10;
  for (var i = 0; i < time; i++) {
    rollDice();
  }
}
function switchPlayer(){
  var switchTurns=true;
  var die1=rollDice()[0];
  var die2=rollDice()[1];
  if(die1==6 || die2==6){
    switchTurns=false;
  }
  return switchTurns;
}
function tileMove(){
  var tilePosition=[redPosition,greenPosition,yellowPosition,bluePosition];
}
function reset(){
  location.reload();
}
function theGame() {
  var currentPlayer="red";
  var win=false;

  while (win=false) {
    if (currentPlayer=="red") {
      diceShake();
      rollDice();
      if (switchPlayer()=true) {
        currentPlayer="green";
      }
    } else if (currentPlayer=="green") {
      diceShake();
      rollDice();
      if (switchPlayer()=true) {
        currentPlayer="yellow";
      }
    } else if (currentPlayer=="yellow") {
      diceShake();
      rollDice();
      if (switchPlayer()=true) {
        currentPlayer="blue";
      }
    } else if (currentPlayer=="blue") {
      diceShake();
      rollDice();
      if (switchPlayer()=true) {
        currentPlayer="red";
      }
    } else {

    }
  }
  reset();
}
