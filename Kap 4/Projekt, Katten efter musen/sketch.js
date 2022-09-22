let justHitRightWall;
let yspeed = 0;
let xspeed = 0;
let xspeed1 = 3;
let yspeed1 = 3;
let xspeed2 = 3;
let yspeed2 = 3;
let xspeed3 = 3;
let yspeed3 = 3;
let speed = 4;
let s = "Lives remaining: ";
let a = 3;
let b = 1;
let c = 0;
let t = "You Lost!";
let u = "Time alive: ";
let v = "You survived: ";
let w = "seconds";
let å = " ";

function preload() {
  img = loadImage("mus2-removebg-preview.png");
  img1 = loadImage(
    "red-cat-hunting-prey-white-background-180948690-removebg-preview.png"
  );
  img2 = loadImage(
    "red-cat-hunting-prey-white-background-180948690-removebg-preview.png"
  );
  img3 = loadImage("mus2.2.jpg");
  img4 = loadImage("Garden-design.jpg");
}

function setup() {
  frameRate(60);
  createCanvas(640, 575);
  x = random(15, 640);
  y = random(15, 555);
  d = 20;
  x1 = random(30, 640);
  y1 = random(30, 555);
  x2 = random(30, 640);
  y2 = random(30, 555);
  x3 = random(30, 640);
  y3 = random(30, 555);
}

function draw() {
  background(img4);
  rect(268, 0, 110, 22, 1000);
  fill(0);
  text(s + a, width / 2.33, 15);
  fill(0);
  text(u + floor(c), width / 50, 15);
  fill(0);
  c += 1 / 60;
  fill(150);
  noStroke();
  image(img, x - 20, y - 20, 70, 70);
  y += yspeed;
  x += xspeed;
  if (y > height - 28 || y < 0 + 30) {
    yspeed *= -1;
  }
  if (x > width - 28 || x < 0 + 10) {
    xspeed *= -1;
  }

  image(img1, x1 - 40, y1 - 40, 100, 100);
  y1 += yspeed1;
  x1 += xspeed1;
  if (y1 > height - 32 || y1 < 0 + 30) {
    yspeed1 *= -1;
  }
  if (x1 > width - 45 || x1 < 0 + 25) {
    xspeed1 *= -1;
  }

  image(img2, x2 - 40, y2 - 40, 100, 100);
  y2 += yspeed2;
  x2 += xspeed2;
  if (y2 > height - 32 || y2 < 0 + 30) {
    yspeed2 *= -1;
  }
  if (x2 > width - 45 || x2 < 0 + 25) {
    xspeed2 *= -1;
  }

  image(img2, x3 - 40, y3 - 40, 100, 100);
  y3 += yspeed3;
  x3 += xspeed3;
  if (y3 > height - 32 || y3 < 0 + 30) {
    yspeed3 *= -1;
  }
  if (x3 > width - 45 || x3 < 0 + 25) {
    xspeed3 *= -1;
  }

  if (c > 10) {
    if (xspeed1 < 0) {
      xspeed1 -= 0.0005;
    }
    if (xspeed1 > 0) {
      xspeed1 += 0.0005;
    }
    if (yspeed1 < 0) {
      yspeed1 -= 0.0005;
    }
    if (yspeed1 > 0) {
      yspeed1 += 0.0005;
    }
    if (xspeed2 < 0) {
      xspeed2 -= 0.0005;
    }
    if (xspeed2 > 0) {
      xspeed2 += 0.0005;
    }
    if (yspeed2 < 0) {
      yspeed2 -= 0.0005;
    }
    if (yspeed2 > 0) {
      yspeed2 += 0.0005;
    }
    if (xspeed3 < 0) {
      xspeed3 -= 0.0005;
    }
    if (xspeed3 > 0) {
      xspeed3 += 0.0005;
    }
    if (yspeed3 < 0) {
      yspeed3 -= 0.0005;
    }
    if (yspeed3 > 0) {
      yspeed3 += 0.0005;
    }
  }

  if (c > 20) {
    if (xspeed1 < 0) {
      xspeed1 -= 0.0005;
    }
    if (xspeed1 > 0) {
      xspeed1 += 0.0005;
    }
    if (yspeed1 < 0) {
      yspeed1 -= 0.0005;
    }
    if (yspeed1 > 0) {
      yspeed1 += 0.0005;
    }
    if (xspeed2 < 0) {
      xspeed2 -= 0.0005;
    }
    if (xspeed2 > 0) {
      xspeed2 += 0.0005;
    }
    if (yspeed2 < 0) {
      yspeed2 -= 0.0005;
    }
    if (yspeed2 > 0) {
      yspeed2 += 0.0005;
    }
    if (xspeed3 < 0) {
      xspeed3 -= 0.0005;
    }
    if (xspeed3 > 0) {
      xspeed3 += 0.0005;
    }
    if (yspeed3 < 0) {
      yspeed3 -= 0.0005;
    }
    if (yspeed3 > 0) {
      yspeed3 += 0.0005;
    }
  }

  if (c > 30) {
    if (xspeed1 < 0) {
      xspeed1 -= 0.0005;
    }
    if (xspeed1 > 0) {
      xspeed1 += 0.0005;
    }
    if (yspeed1 < 0) {
      yspeed1 -= 0.0005;
    }
    if (yspeed1 > 0) {
      yspeed1 += 0.0005;
    }
    if (xspeed2 < 0) {
      xspeed2 -= 0.0005;
    }
    if (xspeed2 > 0) {
      xspeed2 += 0.0005;
    }
    if (yspeed2 < 0) {
      yspeed2 -= 0.0005;
    }
    if (yspeed2 > 0) {
      yspeed2 += 0.0005;
    }
    if (xspeed3 < 0) {
      xspeed3 -= 0.0005;
    }
    if (xspeed3 > 0) {
      xspeed3 += 0.0005;
    }
    if (yspeed3 < 0) {
      yspeed3 -= 0.0005;
    }
    if (yspeed3 > 0) {
      yspeed3 += 0.0005;
    }
  }

  distance1 = ((x1 - x) ** 2 + (y1 - y) ** 2) ** 0.5;
  distance2 = ((x2 - x) ** 2 + (y2 - y) ** 2) ** 0.5;
  distance3 = ((x3 - x) ** 2 + (y3 - y) ** 2) ** 0.5;
  if (distance1 < 40) {
    x1 = random(15, 385);
    y1 = random(15, 385);
    image(img1, x1 - 40, y1 - 40, 100, 100);
    a -= b;
  }
  if (distance2 < 40) {
    x2 = random(15, 385);
    y2 = random(15, 385);
    image(img2, x2 - 40, y2 - 40, 100, 100);
    a -= b;
  }
  if (distance3 < 40) {
    x3 = random(15, 385);
    y3 = random(15, 385);
    image(img2, x3 - 40, y3 - 40, 100, 100);
    a -= b;
  } else if (a - b == -1) {
    background(img3);
    fill(0);
    c -= 1 / 60;
    textSize(15);
    text("Press enter to play again", width / 2.6, height / 1.75);
    text(v + floor(c) + å + w, width / 2.62, height / 1.85);
    xspeed = 0;
    yspeed = 0;
    xspeed1 = 0;
    yspeed1 = 0;
    xspeed2 = 0;
    yspeed2 = 0;
    xspeed3 = 0;
    yspeed3 = 0;
    fill(0);
    textSize(35);
    text(t, width / 2.5, height / 2);
  }
}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    yspeed = speed;
    xspeed = 0;
  }
  if (keyCode === UP_ARROW) {
    yspeed = -speed;
    xspeed = 0;
  }
  if (keyCode === LEFT_ARROW) {
    yspeed = 0;
    xspeed = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    yspeed = 0;
    xspeed = speed;
  }
  if (keyCode === 13) {
    a = 3;
    c = 0;
    xspeed = 0;
    yspeed = 0;
    xspeed1 = 3;
    yspeed1 = 3;
    xspeed2 = 3;
    yspeed2 = 3;
    xspeed3 = 3;
    yspeed3 = 3;
    preload();
    setup();
  }
}
