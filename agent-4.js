function Agent() {
  this.position = createVector(random(width), random(height));
  this.lastPosition = this.position.copy();
  this.angle = 0;
}

Agent.prototype.draw = function() {
  line(this.lastPosition.x, this.lastPosition.y, this.position.x, this.position.y);
}

Agent.prototype.update = function() {
  this.lastPosition = this.position.copy();
  this.angle = noise(this.position.x * 0.03, this.position.y * 0.03)*10;
  this.position.x += cos(this.angle) * 4;
  this.position.y += sin(this.angle) * 4;
  if (this.isOffscreen()) {
    this.position.set(random(width), random(height));
    this.lastPosition = this.position.copy();
  }
}

Agent.prototype.isOffscreen = function() {
  return this.position.x < 0 || this.position.x > width
    || this.position.y < 0 || this.position.y > height;
}