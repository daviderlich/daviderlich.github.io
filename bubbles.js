let bubbles = [];


function setup() {

  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
  
 
}

function draw() {
  background(0);

  
  for ( var b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for ( var other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true
      } 
    }
    if (overlapping == true) {
      b.changeColor(255);
    } else {
      b.changeColor(0);
    }
    
  }
}
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r)
  }


  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  move() {
    this.x = this.x + random(-7, 7);
    this.y = this.y + random(-7, 7);
  }

  show() {
    stroke(255, 0, 200);
    strokeWeight(4);
    fill(this.brightness)
    ellipse(this.x, this.y, this.r * 2);
  }
}
