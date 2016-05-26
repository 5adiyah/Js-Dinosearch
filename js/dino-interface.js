var Dino = require('./../js/dino.js').Dino;
var wrongGuess = 0;

var display = function(name) {
  console.log("This is name in display: " + name);
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
  var jumble = $('#dinosaur').text(upperJumble);
  return jumble;
};

var compare = function(name, user) {
  if(name === user) {
    console.log("This is name in compare: " + name);
    console.log("This is user: " + user);
    console.log("success");
  } else {
    console.log("fail");
  }
}

var playGame = function(name) {
  $('#check').click(function() {
    var user = $('#userGuess').val();
    // var name = $('#dinosaur').text();
    console.log(user);
    console.log(name);
    compare(name,user);
  });
}


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

  // $('#check').click(function() {
  //   var user = $('#userGuess').val();
  //   var name = $('#dinosaur').text();
  //   console.log(user);
  //   console.log(name);
  //   compare(name,user);
  // });


});
