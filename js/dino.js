exports.Dino = function() {
  this.dinoName = "";
  this.slicedName = "";
  this.jumbledName = "";
};

exports.Dino.prototype.grab = function() {
  $.get('https://dinoipsum.herokuapp.com/api/?format=html&words=1&paragraphs=1').then(function(response) {
    debugger;
    this.dinoName = response;
    return this.dinoName;
  }).fail(function(error){
    console.log("The dinosaur has died");
  });
};

exports.Dino.prototype.slice = function() {
  this.slicedName = this.dinoName.slice();
  return this.slicedName;
  console.log(this.slicedName);
}

// exports.Dino.prototype.jumble = function() {
//   var dinoName = this.grab();
//   var sliceTheDino = dinoName.toUpper();
//   console.log(sliceTheDino);
//   // return sliceTheDino;
// };
