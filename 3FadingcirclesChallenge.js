background(255);
colorMode(HSB);
noStroke();

while(true) {
  colorMode(HSB, 100);
  background(0, 0, 255, 0.1);
  fill(255, 0, 0);
  beginShape(TRIANGLE_FAN);
  vertex(57.5, 50);
  vertex(57.5, 15);
  vertex(92, 50);
  vertex(57.5, 85);
  vertex(22, 50);
  vertex(57.5, 15);
  endShape();
}
