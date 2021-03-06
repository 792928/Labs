/*
** Paddle Game
** Dean Davis
** Oct 15, 2018
*/

function Paddle(velocity,col){
  // Instance variables
  this.loc = createVector(mouseX,550)
  this.vel = velocity;
  this.col = col;
  // THis function calls other fucntions
  this.run = function(){
    this.update();
    this.render();
}
//This function changes the location of the Ball
// by adding speed to x and y
this.update = function(){
var mousLoc = createVector(mouseX, 550);
this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)
}

//checkEdges() reverses speed when the ball touches an edge
// render() draws the ball at the new locatoin
this.render = function(){
  fill(this.col);
  rect(this.loc.x-((w=(100*a))/2), this.loc.y, (w+(100*a)), 20);
}
}
