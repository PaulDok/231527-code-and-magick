'use strict';

window.colorizeElement = (function () {
  return function (element, colors, callback) {
    var currentColorValue = element.style.fill;
    if (!colors.includes(currentColorValue)) {
      currentColorValue = element.style.backgroundColor;
    }

    var randomizeElementColor = function () {
      currentColorValue = window.utils.getRandomElementExcept(colors, currentColorValue);
      callback(element, currentColorValue);
    };

    var randomizeElementColorOnEnter = function (event) {
      if (window.eventChecker.isActivateEvent(event)) {
        randomizeElementColor();
        callback(element, currentColorValue);
      }
    };

    element.addEventListener('click', randomizeElementColor);
    element.addEventListener('keydown', randomizeElementColorOnEnter);
  };
})();
