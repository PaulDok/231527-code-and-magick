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
    onSetupHide = onHideCallback;
    window.load('https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data', updateLoadedWizards);
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

  var showSetupOnClickHandler = function () {
    showSetup(noop);
  };

  var hideSetupOnEnterHandler = function (event) {
    if (window.eventChecker.isActivateEvent(event)) {
      hideSetup();
    }
  };

  setupOpenButton.addEventListener('click', showSetupOnClickHandler);
  setupCloseButton.addEventListener('click', hideSetup);
  setupSubmitButton.addEventListener('click', hideSetup);

  setupOpenButton.addEventListener('keydown', showSetupOnEnterHandler);
  setupCloseButton.addEventListener('keydown', hideSetupOnEnterHandler);
  setupSubmitButton.addEventListener('keydown', hideSetupOnEnterHandler);

  // Elements coloring
  var fillElement = function (element, color) {
    element.style.fill = color;
    setDelayedTimer();
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
    setDelayedTimer();
  };

  window.colorizeElement(coat, window.colors.coatColorOptions, coat.style.fill, fillElement);
  window.colorizeElement(eyes, window.colors.eyeColorOptions, eyes.style.fill, fillElement);
  window.colorizeElement(fireball, window.colors.fireballColorOptions, fireball.style.backgroundColor, changeElementBackground);

  // Display of other wizards
  var similarMagesDiv = setupOverlay.getElementsByClassName('setup-similar')[0];
  var wizards = null;
  var wizardsToDisplay = null;
  var numberOfWizardsToDisplay = 5;
  var timer = null;

  var setDelayedTimer = function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(updateDisplayedWizards, 5000);
  };

  var updateDisplayedWizards = function () {
    wizardsToDisplay = window.utils.selectRandomPartOfArray(wizards, numberOfWizardsToDisplay);

    similarMagesDiv.innerHTML = '';
    var fragment = document.createDocumentFragment();
    wizardsToDisplay.forEach(function (wizard) {
      fragment.appendChild(window.render(wizard));
    });

    similarMagesDiv.appendChild(fragment);
  };

  var updateLoadedWizards = function (data) {
    wizards = data;
    updateDisplayedWizards();
  };
})();
