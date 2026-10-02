const r = require("raylib");
const { btn, color } = require("./a_rounded_button.js");

function setup(windowWidth, windowHeight, title, fps) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(windowWidth, windowHeight, title);
  r.SetTargetFPS(fps);
  return;
}

function running() {
  return !r.WindowShouldClose();
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  r.DrawRectangleRounded(btn, 20, 4, color);

  r.EndDrawing();
}

function update() {}

function tearDown() {
  r.CloseWindow();
}

module.exports = {
  setup,
  running,
  draw,
  update,
  tearDown,
};
