var Dino = require('./../js/dino.js').Dino;
var wrongGuess = 0;

var display = function(name) {
  console.log(name);
  return name;
};

var jumble = function(splittedName) {
  var length = splittedName.length;
  for(var i = length -1; i >0; i--){
    var j = Math.floor(Math.random() * (i+1));
    var splitName = splittedName[i];
    splittedName[i] = splittedName[j];
    splittedName[j] = splitName;
  }
  var jumbledName = splittedName.join("");
  var upperJumble = jumbledName.toUpperCase();
  $('#dinosaur').html("<h2>TELL ME WHAT DINOSAUR THIS IS, QUICK!</h2> <br> <h1>" + upperJumble + "</h1>");
};

var playGame = function(name) {
  $('#check').click(function() {
    var user = $('#userGuess').val();
    compare(name,user);
  event.preventDefault();
  });
};
var compare = function(name, user) {
  if(name === user) {
    $('#guessedDino').show();
    $('#all').hide();
  } else {
    wrongGuess += 1;
    $('#wrongGuesses').text("You have " + (5 - wrongGuess) + " guesses left until a meteor hits earth and you kill this adorable dinosaur");
    $('#wrongGuesses').show();
      if (wrongGuess === 5) {
        $('#deadDino').show();
        $('#wrongGuesses').hide();
        $('#all').hide();
        $('#newHide').show();
      }
  }
};
var newDinoPic = function() {
  var min = 1;
  var max = 10;

  var picList = Math.floor(Math.random() * (max - min + 1) + min);
  return picList;
};

$(document).ready(function(){
  var dino = new Dino();
  $('#dinoRando').click(function(){
    var picList = newDinoPic();
    dino.grab(display, jumble, playGame);
    $('#dinoPicture').html("<img src=/dinoPics/" + picList + ".png>");
    $('#newHide').hide();
    $('#newShow').show();
    event.preventDefault();
  });
});
