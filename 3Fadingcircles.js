function setup() { 
  background(255);
  colorMode(HSB);
  noStroke();
}
function draw(){
  colorMode(HSB, 100);
  background(0, 0, 255, 0.1);
  fill(random(150,200),255,255);
  ellipse(random(width), random(height), random(20, 40));
}
