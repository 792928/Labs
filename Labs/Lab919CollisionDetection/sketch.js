//  Global variables
var boids = [];
var redBall;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
loadBoids(50);
redBall = new Ball(createVector(0,0),33,color(255,0,0))
// method call ^^
}

function draw() {
    background(20,20,20,90)
    redBall.run();
for(var i = 0 ; i < boids.length; i++){
  boids[i].run();
}
// eliminating LoadBoids
for (var i = 0; i <boids.length; i++){
  var x = boids[i];
  var y = redBall.loc;
  var z = x.loc;
  //retruns distasnce betwee ntwo objects
  var dist = y.dist(z);
  if (dist <= 25){
    boids.splice(i,1)
  }
}
}

function LoadBoids(numboids){
  for(var i = 0; i < numboids; i = i + 1){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var c = random(150, 255);
    var clr = color(c, c, c);

    boids.push(new Boid(loc, vel, 15, clr));
  }
///  var loc = createVector(random(width), random(height));

}
