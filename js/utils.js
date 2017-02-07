'use strict';

window.utils = {
  getRandomElement: function (array) {
    var randomArrayIndex = Math.floor(Math.random() * array.length);
    return array[randomArrayIndex];
  },

  getRandomElementExcept: function (array, reference) {
    var newElement = this.getRandomElement(array);
    while (newElement === reference) {
      newElement = this.getRandomElement(array);
    }
    return newElement;
  }
};
