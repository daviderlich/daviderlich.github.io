/*let x;
let y;

let xspeed;
let yspeed;

let r, g, b;

function preload() {
  dvd = loadImage("dvd_logo.png");
}

function setup() {
  createCanvas(750, 500);
  x = random(width);
  y = random(height);
  xspeed = 3;
  yspeed = 3;
  pickColor();
}
function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);

}

function draw() {
  background(0);
  tint(r, g, b);
  image(dvd, x, y);


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}*/
function setup() {
  createCanvas(500, 500, WEBGL);
  fill(random(255), random(255), random(255))
}

function draw() {
  background(200);
  rotateX(frameCount * 0.11);
  rotateY(frameCount * 0.11);
  noStroke();
  sphere(100, 10, 24)
}
