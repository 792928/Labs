/*
** Ball Constructor Function
** Dean Davis
** Aug 21, 2018
*/

function Boid(location, velocity, radius, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
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
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  var d = this.loc.dist(redBall.loc);
  // p5.Vector.sub()  returns a vector
  if(d<200){
  var steeringForce = p5.Vector.sub(this.loc, redBall.loc);
  steeringForce.normalize();  //  changes the magnitud to 1
  steeringForce.mult(.1);    //  scales the magnitude to 0.5
  this.vel.add(steeringForce);

}
}

//checkEdges() reverses speed when the ball touches an edge
this.checkEdges = function(){
  if(this.loc.x < 0) this.loc.x = width;
  if(this.loc.x > width) this.loc.x = 0;
  if(this.loc.y < 0) this.loc.y = height;
  if(this.loc.y > height) this.loc.y = 0;
}

// render() draws the ball at the new locatoin
this.render = function(){
  push()
  translate(this.loc.x, this.loc.y);
  rotate(this.vel.heading() = radians(90));
  triangle(-5,0,5,0,0,-15);
  pop() // pop or restpre the coordinate system
}
}
