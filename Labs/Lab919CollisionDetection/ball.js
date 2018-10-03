/*
** Ball Constructor Function
** Dean Davis
** Aug 21, 2018
*/

function Ball(loc, rad, col){
  // Instance variables
  this.loc = loc;
  this.rad = rad;
  this.col = col;
  //this.acc = createVector(0, 0)
  //this.acc = createVector(0,.1);
  // THis function calls other fucntions
  this.run = function(){
    this.update();
    this.render();
}
//This function changes the location of the Ball
// by adding speed to x and y
this.update = function(){
  var mousLoc = createVector(mouseX, mouseY);
  this.loc = p5.Vector.lerp(this.lerp, mouseLoc, .9)

}

// render() draws the ball at the new locatoin
this.render = function(){
  fill(this.col);
  noStroke();
  ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
}
}
