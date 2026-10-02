const r = require("raylib");
const sketch = require("./sketch.js");
const geometry = require("./geometry.js");

const WINDOW_WIDTH = 400;
const WINDOW_HEIGHT = 400;
const FPS = 60;

function draw() {
  const WIDTH = 200;
  const HEIGHT = 150;

  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  r.DrawRectangle(
    geometry.calOffset(WINDOW_WIDTH, WIDTH),
    geometry.calOffset(WINDOW_HEIGHT, HEIGHT),
    WIDTH,
    HEIGHT,
    r.BLUE,
  );

  r.EndDrawing();
}

function main() {
  sketch.setup(WINDOW_WIDTH, WINDOW_HEIGHT, "Square in center of window", FPS);
  sketch.loop(draw);
  sketch.tearDown();
}

main();
