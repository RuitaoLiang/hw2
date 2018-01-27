function setup() {
  createCanvas(340, 340);
}

function draw() {
  stroke(random(width), random(height), 0);
  line(random(width), random(height), random(width), random(height));
}
