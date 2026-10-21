const r = require("raylib");

let rad = 0;
let x = 0;
let y = 0;

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE)
  r.InitWindow(600, 400, "Ellipse");
  r.SetTargetFPS(50);
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  for (let degree = 0; degree < 360; degree++) {
    rad = (Math.PI / 180) * degree;
    x = 150 * Math.cos(rad) + 300;
    y = (150 * Math.sin(rad) + (200 * (0.5 + 1))) * 0.5;
    r.DrawCircle(x, y, 1, r.RED)
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