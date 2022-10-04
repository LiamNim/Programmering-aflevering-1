function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i += 2) {
    let x = random(150);
    let y = random(400);
    let r = random(100);
    fill(254, 0, 0);
    circle(x, y, r);
    fill(0);
    text(i, x, y);
  }
  for (let i = 1; i < 100; i += 2) {
    let x = random(250, 400);
    let y = random(400);
    let r = random(100);
    fill(0, 0, 254);
    circle(x, y, r);
    fill(0);
    text(i, x, y);
  }
}
