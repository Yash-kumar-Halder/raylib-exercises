const r = require("raylib");
const { window, color } = require("./a_colored_window");
const CW = window;

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

  r.DrawRectangleRec(CW, color);
  r.DrawRectangleLines(CW.x, CW.y, CW.width, CW.height, color);
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
