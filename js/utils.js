'use strict';

window.utils = (function () {
  var getRandomElement = function (array) {
    var randomArrayIndex = Math.floor(Math.random() * array.length);
    return array[randomArrayIndex];
  };

  var getRandomElementExcept = function (array, reference) {
    var newElement = getRandomElement(array);
    while (newElement === reference) {
      newElement = getRandomElement(array);
    }
    return newElement;
  };

  return {
    getRandomElementExcept: getRandomElementExcept
  };
})();
