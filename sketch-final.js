/**
 * noise values (noise 2d) are used to animate a bunch of agents.
 *
 * KEYS
 * 1-2                 : switch noise mode
 * space               : new noise seed
 * backspace           : clear screen
 * s                   : save png
 */


var agents = [];
var agentCount = 4000;
var noiseScale = 300;
var noiseStrength = 10;
var overlayAlpha = 10;
var agentAlpha = 90;
var strokeWidth = 0.3;
var drawMode = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < agentCount; i++) {
    agents[i] = new Agent();
  }
}

function draw() {
  fill(255, overlayAlpha);
  noStroke();
  rect(0, 0, width, height);

  // Draw agents
  stroke(0, agentAlpha);
  for (var i = 0; i < agentCount; i++) {
    if (drawMode === 1) agents[i].update1(noiseScale, noiseStrength, strokeWidth);
    else agents[i].update2(noiseScale, noiseStrength, strokeWidth);
  }
}

function keyReleased() {
  if (p.key === 's' || p.key === 'S') p.saveCanvas(gd.timestamp(), 'png');
  if (p.key === '1') drawMode = 1;
  if (p.key === '2') drawMode = 2;
  if (p.key === ' ') {
    var newNoiseSeed = p.floor(p.random(10000));
    p.noiseSeed(newNoiseSeed);
  }
  if (p.keyCode === p.DELETE || p.keyCode === p.BACKSPACE) p.background(255);
}
