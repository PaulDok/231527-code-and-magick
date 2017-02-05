'use strict';

// Variables - form elements
var setupOverlay = document.getElementsByClassName('setup')[0];
var setupOpenButton = document.getElementsByClassName('setup-open')[0];
var setupCloseButton = setupOverlay.getElementsByClassName('setup-close')[0];
var setupSubmitButton = setupOverlay.getElementsByClassName('setup-submit')[0];
var coat = document.getElementById('wizard-coat');
var eyes = document.getElementById('wizard-eyes');
var fireball = setupOverlay.getElementsByClassName('setup-fireball-wrap')[0];

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

// Setup form open/close handlers
var showSetup = function () {
  setupOverlay.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
  setupOpenButton.setAttribute('aria-pressed', true);
};

var hideSetup = function () {
  setupOverlay.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
  setupOpenButton.setAttribute('aria-pressed', false);
};

var isActivateEvent = function (event) {
  return event && event.keyCode === ENTER_KEY_CODE;
};

var isEscapeEvent = function (event) {
  return event && event.keyCode === ESCAPE_KEY_CODE;
};

var setupKeydownHandler = function (event) {
  if (event.target !== document.querySelector('input') && isEscapeEvent(event)) {
    hideSetup();
  }
};

var showSetupOnEnterHandler = function (event) {
  if (isActivateEvent(event)) {
    showSetup();
  }
};

var hideSetupOnEnterHandler = function (event) {
  if (isActivateEvent(event)) {
    hideSetup();
  }
};

setupOpenButton.addEventListener('click', showSetup);
setupCloseButton.addEventListener('click', hideSetup);
setupSubmitButton.addEventListener('click', hideSetup);

setupOpenButton.addEventListener('keydown', showSetupOnEnterHandler);
setupCloseButton.addEventListener('keydown', hideSetupOnEnterHandler);
setupSubmitButton.addEventListener('keydown', hideSetupOnEnterHandler);

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

colorizeElement(coat, coatColorOptions, 'fill');
colorizeElement(eyes, eyeColorOptions, 'fill');
colorizeElement(fireball, fireballColorOptions, 'background');
