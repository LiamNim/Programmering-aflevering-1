
function setup() {
  createCanvas(512, 512);
  x = random(20, 490);
  y = random(20,490);
  x1 = random(20,490);
  y1 = random(20, 490);
  x2 = random(20, 490);
  y2 = random(20, 490);
}

function draw() {
  background(105);
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  ellipse(x, y, 25, 25);
  fill(25, 10, 200);


  if (keyIsDown(65)) {
    x1 -= 5;
  }

  if (keyIsDown(68)) {
    x1 += 5;
  }

  if(keyIsDown(87)) {
    y1 -= 5;
  }

  if(keyIsDown(83)) {
    y1 += 5;
  }
  rect(x1, y1, 25, 25);
  fill(5, 100, 0);
}