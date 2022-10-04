let i = 0;
function setup() {
  createCanvas(400, 400);
  while (i < 100) {
    //Så længe i er mindre end 100 loader den løkken igennem
    let x = random(400); //Giver x en random værdi
    let y = random(400); //Giver y en random værdi
    let r = random(100); //Giver r en random værdi
    circle(x, y, r); //Laver en cirkel med x, y og r
    text(i, x, y); //Skriver cirklens nummer inde i cirklen
    i = i + 1; //Tilføjer en til i
  }
}
