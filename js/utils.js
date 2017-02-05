'use strict';

var window.utils = {
  getRandomElement: function (array) {
    var randomArrayIndex = Math.floor(Math.random() * array.length);
    return array[randomArrayIndex];
  },

  getRandomElementExcept: function (array, reference) {
    var newElement = null;
    do {
      newElement = this.getRandomElement(array);
    } while (newElement === reference);
    return newElement;
  }
};
