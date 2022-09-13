function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(200);
  frameRate(60);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
  ellipse(mouseX, mouseY, 33, 33);
}

