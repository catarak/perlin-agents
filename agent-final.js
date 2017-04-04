
var Agent = function() {
    this.vector = createVector(random(width), random(height));
    this.vectorOld = this.vector.copy();
    this.stepSize = random(1, 5);
    this.isOutside = false;
    this.angle = undefined;
}

Agent.prototype.update = function(strokeWidth) {
    this.vector.x += cos(this.angle) * this.stepSize;
    this.vector.y += sin(this.angle) * this.stepSize;
    this.isOutside = this.vector.x < 0 || this.vector.x > width || this.vector.y < 0 || this.vector.y > height;
    if (this.isOutside) {
        this.vector.set(random(width), random(height));
        this.vectorOld = this.vector.copy();
    }
    strokeWeight(strokeWidth * this.stepSize);
    line(this.vectorOld.x, this.vectorOld.y, this.vector.x, this.vector.y);
    this.vectorOld = this.vector.copy();
    this.isOutside = false;
}

Agent.prototype.update1 = function(noiseScale, noiseStrength, strokeWidth) {
    this.angle = noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * noiseStrength;
    this.update(strokeWidth);
}

Agent.prototype.update2 = function(noiseScale, noiseStrength, strokeWidth) {
    this.angle = noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * 24;
    this.angle = (this.angle - floor(this.angle)) * noiseStrength;
    this.update(strokeWidth);
} 