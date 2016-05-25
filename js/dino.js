exports.Dino = function(dinoName) {
  this.dinoName = dinoName;
};

exports.Dino.prototype.get = function() {
  var getDino = new XMLHttpRequest();
  getDino.open('GET', 'https://dinoipsum.herokuapp.com/api/?format=html&words=5&paragraphs=1');
  return getDino.send()
  .then(getDino.responseText)
  .then(getDino.slice(3,-5));
  console.log(getDino);
};
//
// exports.Dino.prototype.getName = function() {
//   var getDino = new Dino();
//   var dinoName = getDino.get();
//   var dinosaur = dinoName.slice(3,-5);
//   return dinosaur;
// };
//
//
//
//
// // var getDino = new XMLHttpRequest();
// // getDino.open('GET', 'https://dinoipsum.herokuapp.com/api/?format=html&words=5&paragraphs=1');
// // getDino.send();
// // return getDino;
