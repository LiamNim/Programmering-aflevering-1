function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  frameRate(60);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
  
}
