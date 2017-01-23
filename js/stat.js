'use strict';

window.renderStatistics = function (ctx, names, times) {
  // draw a shadow
  drawRect(ctx, 110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.7)');
  // draw a white rectangle
  drawRect(ctx, 100, 10, 420, 270, 'rgba(256, 256, 256, 1.0)', 'rgba(0, 0, 0, 0.7)');

  // print header text
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // find max result to scale the columns
  var maxTime = getMaxTime(times);

  // variables for histogram
  var histoHeight = 150;
  var histoX = 120;
  var histoBottomY = 100 + histoHeight;
  var scale = histoHeight / maxTime;
  var columnWidth = 40;
  var columnSpacing = 50;

  // draw individual results in a loop
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = scale * time;
    drawColumnAndScore(ctx, i, name, time, histoX, histoBottomY, columnWidth, columnSpacing, height);
  }
};

var drawRect = function (ctx, x, y, width, height, backgroundColor, borderColor) {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = borderColor;
  ctx.strokeRect(x, y, width, height);
};

var drawColumnAndScore = function (ctx, i, name, time, histoX, histoBottomY, columnWidth, columnSpacing, height) {
  var x = histoX + i * (columnWidth + columnSpacing);
  var y = histoBottomY - height;

  // draw column
  var fillColor = getRandomColor(name);
  drawRect(ctx, x, y, columnWidth, height, fillColor, 'rgba(0, 0, 0, 0.7)');

  // print name and score
  ctx.fillStyle = '#000';
  ctx.fillText(time.toFixed(0), x, y - 5);
  ctx.fillText(name, x, histoBottomY + 20);
};

var getMaxTime = function (times) {
  var maxTime = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }
  return maxTime;
};

var getRandomColor = function (name) {
  if (name === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    // Поскольку в задании сказано
    // Цвет колонки других игроков — синие, а насыщенность задается случайным образом
    // то для управления _насыщенностью_ использован формат hsl
    var saturation = Math.floor(Math.random() * 100);
    return 'hsl(240,' + saturation + '%,50%)';
  }
};
