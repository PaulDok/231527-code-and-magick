'use strict';

// Setup form open/close handlers
var setupOverlay = document.getElementsByClassName('setup')[0];
var setupOpenButton = document.getElementsByClassName('setup-open')[0];
var setupCloseButton = document.getElementsByClassName('setup-close')[0];

var showSetupHandler = function() {
  setupOverlay.classList.remove('invisible');
};

var closeSetupHandler = function() {
  setupOverlay.classList.add('invisible');
};

setupOpenButton.addEventListener('click', showSetupHandler);
setupCloseButton.addEventListener('click', closeSetupHandler);

// Color changing
var coat = document.getElementById('wizard-coat');
var coatColorOptions = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyes = document.getElementById('wizard-eyes');
var eyeColorOptions = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireball = document.getElementsByClassName('setup-fireball-wrap')[0];
var fireballColorOptions = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomValueFromList = function(list) {
  var randomListIndex = Math.floor(Math.random() * list.length);
  return list[randomListIndex];
};

var getNewColor = function(current, colorList) {
  // Make sure the color is different from current one
  var newColor = '';
  do {
    newColor = getRandomValueFromList(colorList);
  } while (newColor === current);
  return newColor;
};

var changeItemFillColorRandomly = function(item, colorList) {
  var newColor = getNewColor(item.style.fill, colorList);
  item.style.fill = newColor;
};

var changeItemBackgroundColorRandomly = function(item, colorList) {
  var newColor = getNewColor(item.style.background, colorList);
  item.style.background = newColor;
};

coat.addEventListener('click', changeItemFillColorRandomly.bind(null, coat, coatColorOptions));
eyes.addEventListener('click', changeItemFillColorRandomly.bind(null, eyes, eyeColorOptions));
fireball.addEventListener('click', changeItemBackgroundColorRandomly.bind(null, fireball, fireballColorOptions));
