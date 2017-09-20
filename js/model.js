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


  // Export the model to window
  window.app = window.app || {};
  window.app.Model = Model;
})(window);
