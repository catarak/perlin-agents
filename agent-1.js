function Agent() {
  this.position = createVector(random(width), random(height));
}

Agent.prototype.update = function() {
  ellipse(this.position.x, this.position.y, 50, 50);
}