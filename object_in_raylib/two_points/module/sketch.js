const r = require("raylib");
// const { window, color } = require("./a_colored_window");
// const CW = window;
// const { btn, color } = require("./a_rounded_button");
const { leftPoint, rightPoint } = require("../two_points");

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
  //   r.DrawRectangleRec(CW, color);
  //   r.DrawRectangleLines(CW.x, CW.y, CW.width, CW.height, color);
  //   r.DrawRectangleRounded(btn, 20, 4, color);
  r.DrawCircle(leftPoint.x, leftPoint.y, 50, r.BLUE);
  r.DrawCircle(rightPoint.x, rightPoint.y, 50, r.BLUE);
  r.DrawLine(leftPoint.x, leftPoint.y, rightPoint.x, rightPoint.y, r.RED);

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
