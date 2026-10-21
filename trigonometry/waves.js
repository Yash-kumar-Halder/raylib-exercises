const r = require("raylib");

const waveCurve = 100;

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE)
  r.InitWindow(600, 400, "Sin & Cos waves");
  r.SetTargetFPS(50);
}

function wave() {
  let deltaRad = 0;
  for (let i = 50; i <= 360 + 50; i++) {
    const rad = (Math.PI / 180) * deltaRad;
    // console.log(deltaRad);
    const sinY = 200 + (-Math.sin(rad)) * waveCurve;
    const cosY = 200 + (-Math.cos(rad)) * waveCurve;

    r.DrawCircle(i, sinY, 1, r.ORANGE);
    r.DrawCircle(i, cosY, 1, r.BLUE);
    r.DrawLine(50, 200, 600, 200, r.BLACK);
    r.DrawLine(50, 0, 50, 400, r.BLACK);
    deltaRad += 360 / 360;
  }
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  wave();
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