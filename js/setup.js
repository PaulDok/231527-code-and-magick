'use strict';

(function () {
  // Variables - form elements
  var setupOverlay = document.getElementsByClassName('setup')[0];
  var setupOpenButton = document.getElementsByClassName('setup-open-icon')[0];
  var setupCloseButton = setupOverlay.getElementsByClassName('setup-close')[0];
  var setupSubmitButton = setupOverlay.getElementsByClassName('setup-submit')[0];
  // Elements for coloring
  var coat = document.getElementById('wizard-coat');
  var eyes = document.getElementById('wizard-eyes');
  var fireball = setupOverlay.getElementsByClassName('setup-fireball-wrap')[0];

  // Setup form open/close logic
  var noop = function () {};
  var onKeySetupHide = function () {
    setupOpenButton.focus();
  };
  var onSetupHide = noop;

  var showSetup = function (onHideCallback) {
    setupOverlay.classList.remove('invisible');
    document.addEventListener('keydown', setupKeydownHandler);
    setupOpenButton.setAttribute('aria-pressed', true);

    if (typeof onHideCallback === 'function') {
      onSetupHide = onHideCallback;
    }
  };

  var hideSetup = function () {
    setupOverlay.classList.add('invisible');
    document.removeEventListener('keydown', setupKeydownHandler);
    setupOpenButton.setAttribute('aria-pressed', false);

    onSetupHide();
    onSetupHide = noop;
  };

  var setupKeydownHandler = function (event) {
    if (event.target !== document.querySelector('input') && window.eventChecker.isEscapeEvent(event)) {
      hideSetup();
    }
  };

  var showSetupOnEnterHandler = function (event) {
    if (window.eventChecker.isActivateEvent(event)) {
      showSetup(onKeySetupHide);
    }
    onSetupHide = onKeySetupHide;
  };

  var hideSetupOnEnterHandler = function (event) {
    if (window.eventChecker.isActivateEvent(event)) {
      hideSetup();
    }
  };

  setupOpenButton.addEventListener('click', showSetup);
  setupCloseButton.addEventListener('click', hideSetup);
  setupSubmitButton.addEventListener('click', hideSetup);

  setupOpenButton.addEventListener('keydown', showSetupOnEnterHandler);
  setupCloseButton.addEventListener('keydown', hideSetupOnEnterHandler);
  setupSubmitButton.addEventListener('keydown', hideSetupOnEnterHandler);

  // Elements coloring
  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  window.colorizeElement(coat, window.colors.coatColorOptions, fillElement);
  window.colorizeElement(eyes, window.colors.eyeColorOptions, fillElement);
  window.colorizeElement(fireball, window.colors.fireballColorOptions, changeElementBackground);
})();
