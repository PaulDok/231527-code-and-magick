'use strict';

// Variables - form elements
var setupOverlay = document.getElementsByClassName('setup')[0];
var setupOpenButton = document.getElementsByClassName('setup-open')[0];
var setupCloseButton = setupOverlay.getElementsByClassName('setup-close')[0];
var coat = document.getElementById('wizard-coat');
var eyes = document.getElementById('wizard-eyes');
var fireball = setupOverlay.getElementsByClassName('setup-fireball-wrap')[0];

// Setup form open/close handlers
var showSetupHandler = function () {
  setupOverlay.classList.remove('invisible');
};

var hideSetupHandler = function () {
  setupOverlay.classList.add('invisible');
};

setupOpenButton.addEventListener('click', showSetupHandler);
setupCloseButton.addEventListener('click', hideSetupHandler);

// Color changing
var coatColorOptions = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyeColorOptions = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColorOptions = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomValueFromList = function (list) {
  var randomListIndex = Math.floor(Math.random() * list.length);
  return list[randomListIndex];
};

var getNewColor = function (current, colorList) {
  // Make sure the color is different from current one
  var newColor = '';
  do {
    newColor = getRandomValueFromList(colorList);
  } while (newColor === current);
  return newColor;
};

var changeItemFillColorRandomly = function (item, colorList) {
  var newColor = getNewColor(item.style.fill, colorList);
  item.style.fill = newColor;
};

var changeItemBackgroundColorRandomly = function (item, colorList) {
  var newColor = getNewColor(item.style.background, colorList);
  item.style.background = newColor;
};

var changeCoatColor = function () {
  changeItemFillColorRandomly(coat, coatColorOptions);
};

var changeEyesColor = function () {
  changeItemFillColorRandomly(eyes, eyeColorOptions);
};

var changeFireballColor = function () {
  changeItemBackgroundColorRandomly(fireball, fireballColorOptions);
};

coat.addEventListener('click', changeCoatColor);
eyes.addEventListener('click', changeEyesColor);
fireball.addEventListener('click', changeFireballColor);
