var splitName = function(name) {
  var splittedName = name.split("");
  return splittedName;
};

exports.Dino = function() {
  this.dinoName = "";
};

exports.Dino.prototype.grab = function(display, jumble, playGame) {
  $.get('https://dinoipsum.herokuapp.com/api/?format=html&words=1&paragraphs=1').then(function(response) {
    this.dinoName = response;
    var slicedName = this.dinoName.slice(3, -5);
    var displayReturn = display(slicedName);
    var splitReturn = splitName(displayReturn);
    jumble(splitReturn);
    playGame(slicedName);
  }).fail(function(error){
    console.log("The dinosaur has died");
  });
};
