var setup = function() {
  createGraphics(480, 120);
}

var draw = function() {
  if (isMousePressed()) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}