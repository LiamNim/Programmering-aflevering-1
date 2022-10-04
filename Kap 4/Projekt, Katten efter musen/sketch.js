//Jeg starter med at definere hastigheder og give bogstaver tekst stykker
//eller værdier så jeg senere hen nemmere kan få tal og tekst op på skærmen
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
  //Jeg bruger funktionen preload til at loade mine billeder ind til senere brug
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
  //Under function setup vælger jeg at sætte min frame rate, og størelsen på canvaset
  frameRate(60);
  createCanvas(640, 575);
  //Jeg definere også nogle x og y og gør så de skal spawne randomly indenfor canvaset
  x = random(15, 640);
  y = random(15, 555);
  x1 = random(30, 640);
  y1 = random(30, 555);
  x2 = random(30, 640);
  y2 = random(30, 555);
  x3 = random(30, 640);
  y3 = random(30, 555);
}

function draw() {
  background(img4); //Jeg laver min baggrund om til billede fire som jeg loadede tidligere
  rect(268, 0, 110, 22, 1000); // Jeg laver to rektangler for at kunne se teksten i spillet bedre
  rect(10, 0, 88, 22, 1000);
  fill(0); //Jeg laver farven på det næste stykke tekst sort
  text(s + a, width / 2.33, 15); //Jeg sætter antal af liv man har tilbage ind som tekst og tal
  text(u + floor(c), width / 50, 15); //Her sætter jeg tiden man har overlevet ind
  c += 1 / 60; //Her får jeg c til at stige med 1/60 hver frame, og når jeg har en frame rate på 60 betyder det at c stiger med en på et sekund
  fill(150); //Jeg laver mine rektangler grå og gør så de ikke har nogen kant
  noStroke();
  image(img, x - 20, y - 20, 70, 70); //Jeg sætter billedet af min mus ind og tildeler den værdierne x og y, og giver den en hastighed
  if (y > height - 28 || y < 0 + 30) {
    //Den sættes til at registrere hvis musen rammer toppen eller bunden og får den til at gå den anden vej
    yspeed *= -1;
  }
  if (x > width - 28 || x < 0 + 10) {
    //Det samme sker her undtagen at det er til siderne
    xspeed *= -1;
  }
  y += yspeed;
  x += xspeed;

  image(img1, x1 - 40, y1 - 40, 100, 100); //Jeg sætter min første kat ind og tildeler den værdierne x1 og y1
  y1 += yspeed1;
  x1 += xspeed1;
  if (y1 > height - 32 || y1 < 0 + 30) {
    //Igen som med musen tjekker det om top eller bund rammes
    yspeed1 *= -1;
  }
  if (x1 > width - 45 || x1 < 0 + 25) {
    //Og det samme med siderne
    xspeed1 *= -1;
  }

  image(img2, x2 - 40, y2 - 40, 100, 100); //Kat nummer to kommer ind med værdierne x2 og y2
  y2 += yspeed2;
  x2 += xspeed2;
  if (y2 > height - 32 || y2 < 0 + 30) {
    //Tjekker top og bund
    yspeed2 *= -1;
  }
  if (x2 > width - 45 || x2 < 0 + 25) {
    //Tjekker siderne
    xspeed2 *= -1;
  }

  image(img2, x3 - 40, y3 - 40, 100, 100); //Kat tre med værdierne x3 og y3
  y3 += yspeed3;
  x3 += xspeed3;
  if (y3 > height - 32 || y3 < 0 + 30) {
    //Tjekker top og bund
    yspeed3 *= -1;
  }
  if (x3 > width - 45 || x3 < 0 + 25) {
    //Tjekker siderne
    xspeed3 *= -1;
  }

  if (c > 10) {
    //Her gør jeg spillet sværer, på den måde at når den registrere at c er over 10 (man har overlevet i 10 sekunder) så begynder kattene at bevæge sig hurtigere
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
    //Jeg gør det samme her bare når der er gået 20 sekunder så det bliver endnu sværer
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
    //Og til sidst igen på 30 sekunder
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

  distance1 = ((x1 - x) ** 2 + (y1 - y) ** 2) ** 0.5; //Her har jeg sat den til at registrer hvis musen og kattene støder sammen
  distance2 = ((x2 - x) ** 2 + (y2 - y) ** 2) ** 0.5;
  distance3 = ((x3 - x) ** 2 + (y3 - y) ** 2) ** 0.5;
  if (distance1 < 40) {
    //Hvis den registrer at musen og kat et støder sammen teleportere den katten væk og man mister et liv
    x1 = random(15, 385);
    y1 = random(15, 385);
    image(img1, x1 - 40, y1 - 40, 100, 100);
    a -= b;
  }
  if (distance2 < 40) {
    //Det samme igen bare med kat to
    x2 = random(15, 385);
    y2 = random(15, 385);
    image(img2, x2 - 40, y2 - 40, 100, 100);
    a -= b;
  }
  if (distance3 < 40) {
    //Og med kat tre
    x3 = random(15, 385);
    y3 = random(15, 385);
    image(img2, x3 - 40, y3 - 40, 100, 100);
    a -= b;
  }

  if (a - b == -1) {
    //Her tjekker den om man er noget ned på 0 liv, og hvis man er slutter spillet
    background(img3); //Baggrund til når man er død
    fill(0); //Jeg sætter det næste tekst til sort
    c -= 1 / 60; //Jeg stopper tiden igen
    textSize(15); //Jeg sætter tekststørelsen til 15
    text("Press enter to play again", width / 2.6, height / 1.75); //Skriver at man kan spille igen
    text(v + floor(c) + å + w, width / 2.62, height / 1.85); //Her fortælles hvor langt tid man har overlevet
    xspeed = 0; //Jeg sætter alle hastigheder til 0 så de ikke bevæger sig bagved baggrunden
    yspeed = 0;
    xspeed1 = 0;
    yspeed1 = 0;
    xspeed2 = 0;
    yspeed2 = 0;
    xspeed3 = 0;
    yspeed3 = 0;
    textSize(35); //Jeg sætter tekststørelsen til 35
    text(t, width / 2.5, height / 2); //Skriver at man tabte
  }
}
function keyPressed() {
  //Laver en funktion der får musen til at bevæge sig når man klikker på piltasterne
  if (keyCode === DOWN_ARROW) {
    //Musen stopper med at gå til sidden og går ned
    yspeed = speed;
    xspeed = 0;
  }
  if (keyCode === UP_ARROW) {
    //Musen stopper med at gå til sidden og går op
    yspeed = -speed;
    xspeed = 0;
  }
  if (keyCode === LEFT_ARROW) {
    //Musen stopper med at gå op eller ned og går til venstre
    yspeed = 0;
    xspeed = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    //Musen stopper med at gå op eller ned og går til højre
    yspeed = 0;
    xspeed = speed;
  }
  if (keyCode === 13) {
    //Der registeres om der bliver trykket på enter
    a = 3; //Hvis der trykkes sættes ens liv til 3
    c = 0; //Tiden starter fofra
    xspeed = 0; //Alle hastigheder resetes
    yspeed = 0;
    xspeed1 = 3;
    yspeed1 = 3;
    xspeed2 = 3;
    yspeed2 = 3;
    xspeed3 = 3;
    yspeed3 = 3;
    setup(); //Kattene og musen spawner alle randomly igen
  }
}
