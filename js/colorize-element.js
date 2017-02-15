'use strict';

window.colorizeElement = (function () {
  var ENTER_KEY_CODE = 13;

  var isActivateEvent = function (event) {
    return event && event.keyCode === ENTER_KEY_CODE;
  };

  return function (element, colors, property) {
    var currentPropertyValue = element.style[property];

    var randomizeElementColor = function () {
      currentPropertyValue = window.utils.getRandomElementExcept(colors, currentPropertyValue);
      element.style[property] = currentPropertyValue;
    };

    var randomizeElementColorOnEnter = function (event) {
      if (isActivateEvent(event)) {
        randomizeElementColor();
      }
    };

    element.addEventListener('click', randomizeElementColor);
    element.addEventListener('keydown', randomizeElementColorOnEnter);
  };
})();
