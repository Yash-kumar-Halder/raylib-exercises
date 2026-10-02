const r = require("raylib");

let WINDOW_WIDTH;
let WINDOW_HEIGHT;

let recWidth = 100;
let recHeight = 500;

function setup(width, height, title = "Raylib Program", fps) {
  r.InitWindow(width, height, title);
  r.SetTargetFPS(fps);
  WINDOW_WIDTH = width;
  WINDOW_HEIGHT = height;
  return;
}

function running() {
  return !r.WindowShouldClose();
}

function loop(fn) {
  while (running()) {
    fn();
  }
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawRectangle(10, 10, recWidth, recHeight, r.BLUE);
  update();
  r.EndDrawing();
}

function update() {
  recWidth++;
  recHeight--;
}

function tearDown() {
  r.CloseWindow();
}

module.exports = {
  setup,
  running,
  loop,
  draw,
  update,
  tearDown,
};
