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

  var selectRandomPartOfArray = function (all, number) {
    var i = 0;
    var selectedArray = [];
    var lastElement = null;
    while (i < number) {
      var newElement = getRandomElementExcept(all, lastElement);
      if (selectedArray.indexOf(newElement) === -1) {
        lastElement = newElement;
        selectedArray.push(newElement);
        i++;
      }
    }
    return selectedArray;
  };

  return {
    getRandomElementExcept: getRandomElementExcept,
    selectRandomPartOfArray: selectRandomPartOfArray
  };
})();
