'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentPropertyValue = element.style[property];
  var ENTER_KEY_CODE = 13;

  var isActivateEvent = function (event) {
    return event && event.keyCode === ENTER_KEY_CODE;
  };

  var randomizeElementColor = function () {
    var newPropertyValue = null;
    while (!newPropertyValue || newPropertyValue === currentPropertyValue) {
      newPropertyValue = window.utils.getRandomElementExcept(colors, currentPropertyValue);
    }
    currentPropertyValue = newPropertyValue;
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
