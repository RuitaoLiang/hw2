function setup() {
  createCanvas(340, 340);
}

function draw() {
	var startX = random(width);
  stroke(startX, random(height), 0);
  line(startX, random(height), random(width), random(height));
}
