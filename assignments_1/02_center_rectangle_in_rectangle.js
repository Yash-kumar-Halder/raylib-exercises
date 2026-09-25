const r = require("raylib");
const sketch = require("./utils/sketch");
const geometry = require("./utils/geometry");

const WINDOW_WIDTH = 500;
const WINDOW_HEIGHT = 500;
const FPS = 60;

const WIDTH = 300;
const HEIGHT = 200;
const LEFT = geometry.calOffset(WINDOW_WIDTH, WIDTH);
const TOP = geometry.calOffset(WINDOW_HEIGHT, HEIGHT);


const INNER_WIDTH = 250;
const INNER_HEIGHT = 150;


function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawRectangle(LEFT, TOP, WIDTH, HEIGHT, r.WHITE);

  r.DrawRectangle(
    LEFT + geometry.calOffset(WIDTH, INNER_WIDTH),
    TOP + geometry.calOffset(HEIGHT, INNER_HEIGHT),
    INNER_WIDTH,
    INNER_HEIGHT,
    r.BLUE,
  );

  r.EndDrawing();
}

function main() {
  sketch.setup(WINDOW_WIDTH, WINDOW_HEIGHT, "Square inside square - (CENTER)", FPS);
  sketch.loop(draw);
  r.CloseWindow();
}

main()