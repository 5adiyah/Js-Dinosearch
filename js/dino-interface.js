var Dino = require('./../js/dino.js').Dino;

var display = function(name) {
  console.log(name + " is the name");
  return name;
};

var splitName = function(name) {
  var splittedName = name.split("");
  console.log(splittedName + " is the splitted name");
  return splittedName;
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
  $('#dinosaur').text(upperJumble);
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
    dino.grab(display, splitName, jumble);
    $('#dinoPicture').html("<img src=/dinoPics/" + picList + ".png>");
    $('#newHide').hide();
    $('#newShow').show();
    event.preventDefault();
  });

  // var jumbled = name.jumble();
  // var sliceTheDino = getTheDino.split("");
  // $('#dinosaur').text(dino.grab());
});
