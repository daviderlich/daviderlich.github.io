function setup() {
  createCanvas(500, 500, WEBGL);
  fill(random(255), random(255), random(255))
}

function draw() {
  background(200);
  rotateX(frameCount * 0.11);
  rotateY(frameCount * 0.11);
  noStroke();
  sphere(100, 10, 90)
}
