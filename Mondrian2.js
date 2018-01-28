function setup() {
  createCanvas(1200, 800);
  strokeWeight(8);
  stroke(80);
  rect(1, 5, 248, 101);
	var steps=0;
	while (steps < 11) {
  fill(random(0,255), random(0,255), random(0,255));
	rect(249, 5, 302, 101);
	fill(random(0,255), random(0,255), random(0,255));
  rect(551, 5, 173, 192);
  fill(random(0,255), random(0,255), random(0,255));
  rect(1, 105, 102, 211);
  fill(random(0,255), random(0,255), random(0,255));
  rect(1, 317, 102, 325);
	rect(1,643,551,94);
  fill(random(0,255), random(0,255), random(0,255));
  rect(103, 106, 449, 317);
  fill(random(0,255), random(0,255), random(0,255));
  rect(103, 423, 184, 220);
  fill(random(0,255), random(0,255), random(0,255));
  rect(287, 423, 121, 220);
  rect(431, 423, 121, 220);
  fill(random(0,255), random(0,255), random(0,255));
  rect(551, 423, 173, 48);
  fill(random(0,255), random(0,255), random(0,255));
  rect(551, 471, 87, 172);
  fill(random(0,255), random(0,255), random(0,255));
  rect(638, 471, 87, 172);
  fill(random(0,255), random(0,255), random(0,255));
  rect(552, 643, 173, 94);
	rect(1,643,551,94);
  fill(random(0,255), random(0,255), random(0,255));
  rect(103, 106, 449, 317);
	steps++;
}
}
