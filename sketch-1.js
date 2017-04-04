var agents = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 100; i++) {
    agents.push(new Agent());
  }
}

function draw() {
  for (var i = 0; i < 100; i++) {
    agents[i].update();
  }
}