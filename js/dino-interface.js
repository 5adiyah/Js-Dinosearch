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
    var jumbledName = splittedName[i];
    splittedName[i] = splittedName[j];
    splittedName[j] = jumbledName;
  }
  var jumbledName = splittedName.join("");
  return jumbledName;
};

$(document).ready(function(){
  var dino = new Dino();
  dino.grab(display, splitName, jumble);
  // var jumbled = name.jumble();
  // var sliceTheDino = getTheDino.split("");
  // $('#dinosaur').text(dino.grab());
});
