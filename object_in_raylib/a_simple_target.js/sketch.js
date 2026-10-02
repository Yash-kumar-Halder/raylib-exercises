const r = require("raylib");

const points = {
  x: 250,
  y: 200,
};

const red = {
  r: 255,
  g: 0,
  b: 0,
  a: 255,
};

const blue = {
  r: 0,
  g: 0,
  b: 255,
  a: 55,
};

const gold = {
  r: 250,
  g: 210,
  b: 175,
  a: 155,
};

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
  r.DrawCircle(points.x, points.y, 50, red);
  r.DrawCircle(points.x, points.y, 100, gold);
  r.DrawCircle(points.x, points.y, 70, blue);
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
