var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(50, 50, 150, 80);


// Ceasar Cipher

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;

function runCipher(){
  var cipherInput = $('#cypher').val();
  var cipherOffset = $('#offset').val();
  cipherOffset = (cipherOffset % alphabet.length);
  var cipherResult = '';

  for(i=0; i<cipherInput.length; i++){
     var letter = cipherInput[i];
     var upper = (letter == letter.toUpperCase());
     letter = letter.toLowerCase();

     var index = alphabet.indexOf(letter);
     if(index == -1){
       cipherResult += letter;
     } else {
       index = ((index + cipherOffset) + alphabet.length);
       var nextLetter = fullAlphabet[index];
       if(upper) nextLetter = nextLetter.toUpperCase();
       cipherResult += nextLetter;
     }
  }

  $('#Result').val(cipherResult);
}

$(document).ready(function() {
  $('#cypher').keypress(function(){
    setTimeout(function(){ runCipher(); },20);
  });
  $('#cypher').blur(function(){
    runCipher();
  });
  $('#offset').change(function(){
    setTimeout(runCipher(),20);
  });

});
