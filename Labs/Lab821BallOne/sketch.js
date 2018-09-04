// Global variables
var balls=[];
// put setup code here
function setup() {
  var obj1 = {};
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(80,80,80);
  loadBalls(12);

}

function draw() {
  background(20,20,20,22)
for(var i = 0; i <balls.length; i++) {
  balls[i].run();
}
}

function loadBalls (numBalls) {

  for(var i = 0; i < numBalls; i=i+1) {
    var x = random(width);
    var y = random(height);
    var loc = createVector(x,y);
    var dx = random(-2,2);
    var dy = random(-2,2);
    var vel = createVector(dx,dy);
    var rad = random(10,20);
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var ball = new Ball(loc, vel, rad, color(r,g,b));

    balls.push(ball);
  }
}
