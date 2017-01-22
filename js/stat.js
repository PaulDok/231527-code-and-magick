'use strict';

window.renderStatistics = function (ctx, names, times) {
  // draw a shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7';
  ctx.fillRect(110, 20, 420, 270);

  // draw a white rectangle
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  // print header text
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // find max result to scale the columns
  var maxTime = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }
  // variables for histogram
  var histoHeight = 150;
  var histoX = 120;
  var histoBottomY = 100 + histoHeight;
  var histoTextY = histoBottomY + 20;
  var scale = histoHeight / maxTime;
  var columnWidth = 40;
  var columnSpacing = 50;

  // draw individual results in a loop
  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];
    var height = scale * time;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      // Поскольку в задании сказано
      // Цвет колонки других игроков — синие, а насыщенность задается случайным образом
      // то для управления _насыщенностью_ использован формат hsl
      ctx.fillStyle = 'hsl(240,' + Math.floor(Math.random() * 100) + '%,50%)';
    }
    ctx.fillRect(histoX + i * (columnWidth + columnSpacing),
        histoBottomY - height,
        columnWidth,
        height);
    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), histoX + i * (columnWidth + columnSpacing), histoBottomY - height - 5);
    ctx.fillText(name, histoX + i * (columnWidth + columnSpacing), histoTextY);
  }
};
