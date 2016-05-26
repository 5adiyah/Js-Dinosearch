exports.Dino = function() {
  this.dinoName = "";
};

// var sortStuff = function(data) {
//   console.log(data);
// };
// var display = function(data) {
//   console.log(data);
// };

exports.Dino.prototype.grab = function(display, splitName, jumble) {
  $.get('https://dinoipsum.herokuapp.com/api/?format=html&words=1&paragraphs=1').then(function(response) {
    this.dinoName = response;
    var slicedName = this.dinoName.slice(3, -5);
    var displayReturn = display(slicedName);
    var splitReturn = splitName(displayReturn);
    var jumbleReturn = jumble(splitReturn);
  }).fail(function(error){
    console.log("The dinosaur has died");
  });
};

// exports.Dino.prototype.jumble = function() {
//   var dinoName = this.dinoName;
//   var slicedName = dinoName.grab();
//   var sliceTheDino = slicedName.split("");
//   console.log(sliceTheDino);
//   // return sliceTheDino;
// };
