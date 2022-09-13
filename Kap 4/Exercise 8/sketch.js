function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable for en størrelse?
  if ((key == 'a') || (key == 'A')) { line(60, 20, 90, 100); } 
  if ((key == 'a') || (key == 'A')) { line(60, 20, 30, 100); }
  if ((key == 'a') || (key == 'A')) { line(75,60,45,60); }
}  
 if (keyIsPressed) {
    if ((key == 'v') || (key == 'V')) { line(30, 20, 75, 100); } 
    if ((key == 'v') || (key == 'V')) { line(75,100,120,20); }
 }
}
