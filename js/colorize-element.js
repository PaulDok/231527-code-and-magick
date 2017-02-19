'use strict';

window.colorizeElement = (function () {
  return function (element, colors, currentColorValue, callback) {
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
