let ada;

function setup() {
  createCanvas(600, 600);
  ada = loadImage('assets/ada.png');
}

function draw() {
  background('#FFEFF3');
  image(ada, 0, 0);
}