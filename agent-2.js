function Agent() {
  this.position = createVector(random(width), random(height));
}

Agent.prototype.draw = function() {
  ellipse(this.position.x, this.position.y, 50, 50);
}

Agent.prototype.update = function() {
  this.position.x += random(2) - 1;
  this.position.y += random(2) - 1;
  if (this.isOffscreen()) {
    this.position.set(random(width), random(height));
  }
}

Agent.prototype.isOffscreen = function() {
  return this.position.x < 0 || this.position.x > width
    || this.position.y < 0 || this.position.y > height;
}