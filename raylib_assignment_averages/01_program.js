const r = require("raylib");


function setup() {
  const window = {
    width: 900,
    height: 600,
  };
  const world = {
    window,
    graph: {
      x: 40,
      y: window.height * 0.95
    },
    array: [14, 16, 20, 8, 12, 5, 12, 12, 5, 11, 3, 12, 23, 4, 6, 22, 12, 10],
    bar: {
      width: 30,
      gap: 10,
    },
    palette: [r.DARKBLUE, r.DARKBLUE]
  }
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(world.window.width, world.window.height, "Average");
  r.SetTargetFPS(50)
  return world;
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
    update(world);
  };
}

function getAverage(arr) {
  let sum = 0;
  arr.forEach(elem => sum += elem);
  return sum / arr.length;
}

function getColor(palette, position) {
  return palette[position % 2];
}


function getMax(arr) {
  let max = 0;
  arr.forEach(elem => max = Math.max(max, elem));
  return max;
}

function getHightUnit(windowHeight, maxValue) {
  return (windowHeight * 0.9) / maxValue
}

function drawGraphScale(world, unit) {
  const length = 4;
  const vector1 = {
    x: world.graph.x - length,
    y: world.graph.y,
  }
  const vector2 = {
    x: world.graph.x + length,
    y: world.graph.y,
  }
  const totalUnitVertical = (world.window.height * 0.9) / unit;
  for (let i = 0; i <= totalUnitVertical; i++) {
    r.DrawLineEx(vector1, vector2, 2, r.BLACK);
    r.DrawText(i.toString(), vector1.x - 15, vector1.y, 10, r.BLACK)
    vector1.y -= unit;
    vector2.y -= unit;
  }
}

function drawBars(heightUnit, world) {
  world.array.forEach((bar, i) => {
    const widthWithBar = world.bar.width + world.bar.gap;
    const height = heightUnit * bar;
    const x = (widthWithBar * i) + world.graph.x;
    const y = world.graph.y - height;
    const color = getColor(world.palette, i);
    r.DrawRectangle(x, y, world.bar.width, height, color);
    r.DrawText(bar.toString(), x + world.graph.x + (world.bar.gap / 2), world.graph.y + 5 - height, world.bar.width * 0.5, r.WHITE)
  });
}

function drawGraph(world, unit) {
  r.DrawLine(world.graph.x, world.graph.y, world.window.width, world.graph.y, r.BLACK)
  r.DrawLine(world.graph.x, world.graph.y, world.graph.x, 0, r.BLACK);
  drawGraphScale(world, unit);
}

function drawAverage(world) {
  const average = getAverage(world.array);
  r.DrawText(`Average: ${average}`, 60, 50, 20, r.BLUE)
}

function drawAvarageLine(world, unit) {
  const average = getAverage(world.array);
  const vector1 = {
    x: world.graph.x,
    y: world.graph.y - unit * average,
  }
  const vector2 = {
    x: (world.array.length * world.bar.width) + (world.array.length * world.bar.gap) + world.bar.width,
    y: world.graph.y - unit * average,
  }
  r.DrawLineEx(vector1, vector2, 2, r.RED);

}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  const maxBar = getMax(world.array);
  const heightUnit = getHightUnit(world.window.height, maxBar);

  drawGraph(world, heightUnit);
  drawBars(heightUnit, world);
  drawAvarageLine(world, heightUnit)
  drawAverage(world);
  r.EndDrawing();
}

function update() { }

function main() {
  const world = setup();
  loop(world);
  r.CloseWindow();
}

main();