var ada;
var christine;
var blank1;
var blank2;
var blank3;

let found = false;
let ada_text = 'Well done!\nAda Lovelace was a 19th century English writer and mathematician. She worked on Charles Babbage‘s analytical engine computer and is often described as the earliest computer programmer.';

function setup() {
  createCanvas(600, 600);
  ada = loadImage('assets/ada.png');
  christine = loadImage('assets/christine.png');
  blank1 = loadImage('assets/blank1.png');
  blank2 = loadImage('assets/blank2.png');
  blank3 = loadImage('assets/blank3.png');
  fill(0)
}

function draw() {
  background('#FFEFF3');
  image(ada, 180, 80);
  image(christine, 20, 20);
  image(blank1, 400, 40);
  image(blank2, 40, 340);
  image(blank3, 300, 300);
  if (found == true){
    fill(0)
    rect(100, 250, 400, 100);
    textSize(16);
    fill(255)
    text(ada_text, 100, 250, 400, 100);
  }
}

function mouseClicked() {
  if ((mouseX > 100) && (mouseX < 310) && (mouseY > 100) && (mouseY < 340)){
    found = true;
  }
}
