function rollDice(){
  var diceValue;
  var diceValue1=Math.floor((Math.random()*6) + 1);
  var diceValue2=Math.floor((Math.random()*6) + 1);

  diceValue=[diceValue1,diceValue2];

  document.getElementById('die1').src='Images/'+ diceValue1 +'.jpg';
  document.getElementById('die2').src='Images/'+ diceValue2 +'.jpg';

  return diceValue;
}
function theGame() {
  document.getElementById('menu').style.visibility="hidden";
  document.getElementById('ludo_game').style.visibility='visible';


}
function displayInstructions() {
  document.getElementById('menu').style.visibility="hidden";
  $('.instructions').css('visibility','visible');
}
function demo() {
  document.getElementById('menu').style.visibility="hidden";
  $('.demo').css('visibility','visible');
}
function savedGames() {
  document.getElementById('menu').style.visibility="hidden";
  $('.savedGames').css('visibility','visible');
}
// (function() {
//
// }());
