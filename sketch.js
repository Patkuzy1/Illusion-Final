var bubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight); 
  for (var i=0; i<7; i++){
    bubbles[i]= new Bubble(200*cos(i)+750,200*sin(i)+400,i);
   background(0);  
    }
  }
  


function draw() {
  
  
  for (var i=0; i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
}
  


function Bubble(x,y,a) {
  this.x=x;
  this.y=y;
  this.a=a;
  
  this.display = function() {
    stroke(255);
    noFill();
    triangle(89*cos(this.a)+this.x,22*sin(this.a)+this.y, 289,50);
  }
  this.move = function() {
    
   this.a=this.a+.2;
   
    
    
    
    
  }
}
