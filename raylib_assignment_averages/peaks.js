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
      y: window.height * 0.97,
    },
    frameHeight: 0.8,
    array: [14, 16, 20, 8, 12, 5, 12, 11, 5, 11, 3, 15, 14, 13, 9],
    pointsData: [],
    peakPoints: [],
    gap: 60,
    palette: [r.RAYWHITE, r.BLACK, r.RED, r.BLUE],
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

function getMax(world) {
  let max = 0;
  for (let i = 0; i < world.array.length; i++) {
    max = Math.max(max, world.array[i])
  }
  return max;
}

function getScale(world, maxValue) {
  return (world.window.height * world.frameHeight) / maxValue;
}

function calPointposition(world, i) {
  const maxPoint = getMax(world);
  const unit = getScale(world, maxPoint);
  const point = world.array[i];

  const width = world.gap;
  const height = unit * point;
  const x = (width * i) + world.graph.x;
  const y = world.graph.y - height;
  return { x, y };
}

function findPointPosition(world) {
  world.pointsPosition = [];

  for (let i = 0; i < world.array.length; i++) {
    const point = calPointposition(world, i);

    world.pointsPosition.push({ ...point })
  }
}

function drawPoints(world) {
  findPointPosition(world);
  findPeakPoints(world);
  world.pointsPosition.forEach((vector) => {
    const color = vector.isPeak ? r.RED : r.BLUE;
    r.DrawCircle(vector.x, vector.y, 4, color)
  })
}

function isPeak(curValue, prevValue, nextValue) {
  return curValue > prevValue && curValue > nextValue;
}

function findPeakPoints(world) {
  for (let i = 1; i < world.array.length; i++) {
    const arr = world.array;
    isPeak(arr[i], arr[i - 1], arr[i + 1]) ? world.pointsPosition[i].isPeak = true : world.pointsPosition[i].isPeak = false;
  }
}

function drawTextPoints(world) {
  for (let i = 0; i < world.pointsPosition.length; i++) {
    const point = world.pointsPosition[i];
    r.DrawText(world.array[i].toString(), point.x - 5, point.y - 20, 18, r.BLACK)
  }
}

function connectPoints(world) {
  for (let i = 0; i < world.pointsPosition.length - 1; i++) {
    const vector1 = {
      x: world.pointsPosition[i].x,
      y: world.pointsPosition[i].y
    }
    const vector2 = {
      x: world.pointsPosition[i + 1].x,
      y: world.pointsPosition[i + 1].y
    }
    r.DrawLineEx(vector1, vector2, 1, world.palette[1])
  }
}

function drawGraphLine(x1, y1, x2, y2) {
  const vector1 = {
    x: x1,
    y: y1,
  }
  const vector2 = {
    x: x2,
    y: y2,
  }
  r.DrawLineEx(vector1, vector2, 1, r.BLACK);
}

function drawGraphScale(world, scale) {
  const length = 8;
  const vector1 = {
    x: world.graph.x - length,
    y: world.graph.y,
  }
  const vector2 = {
    x: world.graph.x,
    y: world.graph.y,
  }
  const totalUnitVertical = (world.window.height * 0.9) / scale;
  for (let i = 0; i <= totalUnitVertical; i++) {
    r.DrawLineEx(vector1, vector2, 2, r.BLACK);
    r.DrawText(i.toString(), vector1.x - 15, vector1.y, 10, r.BLACK)
    vector1.y -= scale;
    vector2.y -= scale;
  }
}

function drawGraph(world) {
  const maxBar = getMax(world);
  const unit = getScale(world, maxBar);
  drawGraphLine(world.graph.x, world.graph.y, world.window.width, world.graph.y)
  drawGraphLine(world.graph.x, world.graph.y, world.graph.x, 0);
  drawGraphScale(world, unit);
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(world.palette[0]);

  drawGraph(world);
  drawPoints(world);
  drawTextPoints(world);
  connectPoints(world);

  r.EndDrawing();
}

function update() { }

function main() {
  const world = setup();
  loop(world);
  r.CloseWindow();
}

main();