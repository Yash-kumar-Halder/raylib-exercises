const r = require("raylib");
const sketch = require("./sketch");
const geometry = require("./geometry");

function setup(windowWidth, windowHeight, str = "Raylib Program") {
  r.InitWindow(windowWidth, windowHeight, str);
  r.SetTargetFPS(50);
}

function createTarget(centerX, centerY, radius, color) {
  r.DrawCircle(centerX, centerY, radius, color);
  return { centerX, centerY };
}

function createSource(centerX, centerY, radius, color) {
  r.DrawCircle(centerX, centerY, radius, color);
}

function findTarget(sourceX, sourceY, target1X, target1Y, target2X, target2Y) {
  const distanceOfTarget1 = geometry.getDistance(
    sourceX,
    sourceY,
    target1X,
    target1Y,
  );
  const distanceOfTarget2 = geometry.getDistance(
    sourceX,
    sourceY,
    target2X,
    target2Y,
  );

  return distanceOfTarget2 >= distanceOfTarget1 ? 1 : 2;
}

function draw() {
  const sourseX = 100;
  const sourseY = 200;
  const target1X = 250;
  const target1Y = 250;
  const target2X = 350;
  const target2Y = 350;

  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  createTarget(target1X, target1Y, 15, r.RED);
  createTarget(target2X, target2Y, 15, r.RED);
  createSource(sourseX, sourseY, 20, r.BLUE);
  const isFirsttarget = findTarget(
    sourseX,
    sourseY,
    target1X,
    target1Y,
    target2X,
    target2Y,
  );
  isFirsttarget === 1
    ? r.DrawLine(sourseX, sourseY, target1X, target1Y, r.BLACK)
    : r.DrawLine(sourseX, sourseY, target2X, target2Y, r.BLACK);

  r.EndDrawing();
}

function main() {
  const WINDOW_WIDTH = 500;
  const WINDOW_HEIGHT = 500;
  const FPS = 60;

  setup(WINDOW_WIDTH, WINDOW_HEIGHT, "Closer Target", FPS);
  sketch.loop(draw);
  r.CloseWindow();
}

main();
