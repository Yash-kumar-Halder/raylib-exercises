const r = require("raylib");

let rad = 0;
let x = 0;
let y = 0;

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE)
  r.InitWindow(400, 400, "Points arround a circle");
  r.SetTargetFPS(50);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawCircle(200, 200, 150, r.GOLD);
  for (let degree = 0; degree < 360; degree += 30) {
    rad = (Math.PI / 180) * degree;
    x = 150 * Math.cos(rad) + 200;
    y = 150 * Math.sin(rad) + 200;
    r.DrawCircle(x, y, 2, r.RED)
  }
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