/*
** Ball Constructor Function
** Dean Davis
** Aug 21, 2018
*/

function Ball(location, velocity, radius, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0, 0)
  //this.acc = createVector(0,.1);
  // THis function calls other fucntions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
}
//This function changes the location of the Ball
// by adding speed to x and y
this.update = function(){
  if(this !== redBall){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  // p5.Vector.sub()  returns a vector
  var steeringForce = p5.Vector.sub(this.loc, createVector(400,400));
  steeringForce.normalize();  //  changes the magnitud to 1
  steeringForce.mult(-.225);    //  scales the magnitude to 0.5
  this.vel.add(steeringForce);

  var steeringForce = p5.Vector.sub(createVector(400,400), this.loc);
  steeringForce.normalize();  //  changes the magnitud to 1
  steeringForce.mult(-0.15);    //  scales the magnitude to 0.5
  this.vel.add(steeringForce);
}
}

//checkEdges() reverses speed when the ball touches an edge
this.checkEdges = function(){
  if(this.loc.x < 0) this.vel.x = -this.vel.x;
  if(this.loc.x > width) this.vel.x = -this.vel.x;
  if(this.loc.y < 0) this.vel.y = -this.vel.y;
  if(this.loc.y > height) this.vel.y = -this.vel.y;
}

// render() draws the ball at the new locatoin
this.render = function(){
  fill(this.col);
  noStroke();
  ellipse(this.loc.x, this.loc.y, radius, radius);
}
}
