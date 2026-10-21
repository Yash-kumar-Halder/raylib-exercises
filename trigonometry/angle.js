const r = require("raylib");

const points = {
  point1: {
    x: 100,
    y: 300,
  },
  point2: {
    x: 350,
    y: 100,
  }
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE)
  r.InitWindow(500, 400, "Ellipse");
  r.SetTargetFPS(50);
}

function getDistance(sourceX, sourceY, targetX, targetY) {
  return Math.sqrt(
    (targetX - sourceX) * (targetX - sourceX) +
    (targetY - sourceY) * (targetY - sourceY),
  );
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawCircle(points.point1.x, points.point1.y, 2, r.RED);
  r.DrawCircle(points.point2.x, points.point2.y, 2, r.RED);
  r.DrawLine(points.point1.x, points.point1.y, points.point2.x, points.point2.y, r.BLACK);

  r.DrawLine(points.point1.x, points.point1.y, points.point2.x, points.point1.y, r.BLUE);
  r.DrawLine(points.point2.x, points.point1.y, points.point2.x, points.point2.y, r.BLUE);

  const hypotenuse = getDistance(points.point1.x, points.point1.y, points.point2.x, points.point2.y)
  const opposite = points.point2.x - points.point1.x;

  // console.log(hypotenuse, opposite);
  const angle = Math.round(Math.asin(opposite / hypotenuse) * (180 / Math.PI))

  r.DrawText(angle.toString(), points.point1.x + 25, points.point1.y - 15, 10, r.RED)


  // console.log(points.point2.x - points.point1.x);
  // console.log(points.point2.y - points.point1.y);


  r.EndDrawing();
}

function update() { }

function loop() {
  while (!r.WindowShouldClose()) {
    draw();
    update();
  }
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}

main();