var ada;
var blank1;
var blank2;
var blank3;

let found = false;

function setup() {
  createCanvas(600, 600);
  ada = loadImage('assets/ada.png');
  blank1 = loadImage('assets/blank1.png');
  blank2 = loadImage('assets/blank2.png');
  blank3 = loadImage('assets/blank3.png');
  fill(0)
}

function draw() {
  background('#FFEFF3');
  image(ada, 160, 80);
  image(blank1, 400, 40);
  image(blank2, 40, 340);
  image(blank3, 300, 300);
  if (found == true){
    fill(0)
    rect(100, 250, 400, 100);
    textSize(60);
    fill(255)
    text('Well done!', 160, 322);
  }
}

function mouseClicked() {
  if ((mouseX > 100) && (mouseX < 240) && (mouseY > 100) && (mouseY < 340)){
    found = true;
  }
}
