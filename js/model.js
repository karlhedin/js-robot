(function (window) {
  // Rectangle
  var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
  };
  Rectangle.prototype.contains = function (x, y) {
    return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
  };

  // Circle
  var Circle = function (radius) {
    this.radius = radius;
  };
  Circle.prototype.contains = function (x, y) {
    return Math.sqrt((x * x) + (y * y)) < this.radius;
  };

  // Model
  function Model() {
    this.room = new Rectangle(5, 5);
    this.currentX = 1;
    this.currentY = 2;
    this.currentDirectionIndex = 0;
  }
  Model.prototype.getRobotPosition = function () {
    var directions = ['N', 'E', 'S', 'W'];
    return this.currentX + ' ' + this.currentY + ' ' + directions[this.currentDirectionIndex];
  };
  // -1 = left
  // 1 = right
  Model.prototype.rotate = function (direction) {
    // Wraps around the array indices
    this.currentDirectionIndex = (this.currentDirectionIndex + direction + 4) % 4;
  };
  Model.prototype.getNewPoint = function () {
    var newPoint;

    switch (this.currentDirectionIndex) {
      case 0: // N
        newPoint = { x: this.currentX, y: this.currentY + 1 };
        break;
      case 1: // E
        newPoint = { x: this.currentX + 1, y: this.currentY };
        break;
      case 2: // S
        newPoint = { x: this.currentX, y: this.currentY - 1 };
        break;
      case 3: // W
        newPoint = { x: this.currentX - 1, y: this.currentY };
        break;
    }

    return newPoint;
  };
  Model.prototype.forward = function () {
    var newPoint = Model.prototype.getNewPoint.call(this);
    if (this.room.contains(newPoint.x, newPoint.y)) {
      this.currentX = newPoint.x;
      this.currentY = newPoint.y;
    }
  };


  // Export the model to window
  window.app = window.app || {};
  window.app.Model = Model;
})(window);
