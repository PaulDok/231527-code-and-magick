'use strict';

window.eventChecker = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isActivateEvent = function (event) {
    return event && event.keyCode === ENTER_KEY_CODE;
  };

  var isEscapeEvent = function (event) {
    return event && event.keyCode === ESCAPE_KEY_CODE;
  };

  return {
    isActivateEvent: isActivateEvent,
    isEscapeEvent: isEscapeEvent
  };
})();
