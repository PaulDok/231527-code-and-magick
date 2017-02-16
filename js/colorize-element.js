'use strict';

window.colorizeElement = (function () {
  var ENTER_KEY_CODE = 13;
  var colorizeLogic = null;

  var isActivateEvent = function (event) {
    return event && event.keyCode === ENTER_KEY_CODE;
  };

  return function (cb) {
    colorizeLogic = cb;
  };
})();
