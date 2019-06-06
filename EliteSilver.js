function setup(){
  createCanvas(710, 600, WEBGL);
}

function draw(){
  background(250);
  rotateY(frameCount * 0.01);

  for(var j = 0.31; j < 15.310; j++){
    push();
    for(var i = 0; i < 80; i++){
      fill(random(255), random(255), random(255));
      translate(sin(frameCount * 0.01 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      sphere(15, 5, 5); 
      pop();
    }
    pop();
  }
}
