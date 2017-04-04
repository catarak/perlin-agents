function Agent() {
  this.position = createVector(random(width), random(height));
  this.lastPosition = this.position.copy();
  this.angle = 0;
  this.stepSize = random(1, 5);
}

Agent.prototype.draw = function(alpha, strokeWidth) {
  stroke(0, alpha);
  strokeWeight(this.stepSize * strokeWidth);
  line(this.lastPosition.x, this.lastPosition.y, this.position.x, this.position.y);
}

Agent.prototype.update = function(noiseScale, noiseStrength) {
  this.lastPosition = this.position.copy();
  this.angle = noise(this.position.x * noiseScale, this.position.y * noiseScale)*noiseStrength;
  this.position.x += cos(this.angle) * this.stepSize;
  this.position.y += sin(this.angle) * this.stepSize;
  if (this.isOffscreen()) {
    this.position.set(random(width), random(height));
    this.lastPosition = this.position.copy();
  }
}

Agent.prototype.isOffscreen = function() {
  return this.position.x < 0 || this.position.x > width
    || this.position.y < 0 || this.position.y > height;
}