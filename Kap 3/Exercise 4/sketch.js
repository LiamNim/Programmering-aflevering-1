function setup() {
  createCanvas(500, 500);
  background(200);
}

let fillVal = 126;
function draw() {
  if (keyIsPressed) {
    if (keyCode == 70) {
      rect(mouseX-25, mouseY-25, 50, 50);
    }
    if (keyCode == 69) {
      ellipse(mouseX, mouseY, 50, 75);
    }
    if (keyCode == 67) {
      circle(mouseX, mouseY, 50);
    }
  }
}