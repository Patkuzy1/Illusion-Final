int x=360;
int c;
void setup(){
  size(500,500);
  
  colorMode(HSB);
}
void draw(){

  background(90);
  
 
  translate(250,250);

  for (int t=0, C=0; t<x; t++, C++){
    
    if (2*c + C > 256){
    C-=206;
    }
    else if (2*c + C < 0){
      C+=206;
    }
    fill(C + 2*c,2005,255);
 
    rotate(radians(13));
    
   rect(t-x,8,2*sqrt(abs(t-x)),2*sqrt(abs(t-x)));
  }
 
  noFill();
  strokeWeight(7);
  stroke(0);
  for(int n = 9; n < 60; n++){
    
    if(-c + 18*n > 0){
      ellipse(0, 0, -c + 18*n, -c + 18*n);
    }
    if(c > 256){
      c-=26;
    }
  }
  noStroke();
  c+=1;
}
