//  Global variables
var boids = [];
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
LoadBoids(20);
// method call ^^
}

function draw() {
    background(20,20,20,90)
for(i=0; i< boids.length; i++){
  boids[i].run();
}
}

function LoadBoids(numboids){
  for(var i = 0; i < numboids; i = i + 1){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var radius = random(20,40);
    var c = random(150, 255);
    var col = color(c, c, c);

    boids.push(new Boid(loc, vel, radius, col));
  }
///  var loc = createVector(random(width), random(height));

}
