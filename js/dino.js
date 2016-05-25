exports.Dino = function(dinoName) {
  this.dinoName = dinoName;
};

exports.Dino.prototype.get = function() {
  $.get('https://dinoipsum.herokuapp.com/api/?format=html&words=1&paragraphs=1').then(function(response) {
    var slicedDino = response.slice(3,-5);
    console.log(slicedDino);
  }).fail(function(error){
    console.log("The dinosaur has died");
  });
};
