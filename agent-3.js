function Agent() {
  this.position = createVector(random(width), random(height));
  this.lastPosition = this.position.copy();
}

Agent.prototype.draw = function() {
  line(this.lastPosition.x, this.lastPosition.y, this.position.x, this.position.y);
}

Agent.prototype.update = function() {
  this.lastPosition = this.position.copy();
  this.position.x += random(8) - 4;
  this.position.y += random(8) - 4;
  if (this.isOffscreen()) {
    this.position.set(random(width), random(height));
    this.lastPosition = this.position.copy();
  }
}

Agent.prototype.isOffscreen = function() {
  return this.position.x < 0 || this.position.x > width
    || this.position.y < 0 || this.position.y > height;
}