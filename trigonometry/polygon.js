const r = require("raylib");

const numberOfSIdes = 7;
const center = {
  x: 200,
  y: 200,
}
const radius = 100;
const eadges = [];

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE)
  r.InitWindow(400, 400, "Points arround a circle");
  r.SetTargetFPS(50);
}

function drawEadge(x1, y1, x2, y2) {
  r.DrawLine(x1, y1, x2, y2, r.RED)
}

function drawEadges() {
  for (let i = 0; i < eadges.length; i++) {
    const x1 = eadges[i].x;
    const y1 = eadges[i].y;
    const x2 = eadges[(i + 1) % eadges.length].x;
    const y2 = eadges[(i + 1) % eadges.length].y;
    drawEadge(x1, y1, x2, y2)
  }
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  for (let degree = 0; degree < 360; degree += (360 / numberOfSIdes)) {
    rad = (Math.PI / 180) * degree;
    x = radius * Math.cos(rad) + center.x;
    y = radius * Math.sin(rad) + center.y;
    eadges.push({ x, y });
    r.DrawCircle(x, y, 2, r.RED)
  }
  drawEadges();
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