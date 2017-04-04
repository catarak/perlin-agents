var agents = [];
var numAgents = 2000;
var noiseScale = 0.003;
var noiseStrength = 10;
var agentAlpha = 90;
var strokeWidth = 0.3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numAgents; i++) {
    agents.push(new Agent());
  }
}

function draw() {
  background(255, 5);
  for (var i = 0; i < numAgents; i++) {
    agents[i].draw(agentAlpha, strokeWidth);
    agents[i].update(noiseScale, noiseStrength);
  }
}