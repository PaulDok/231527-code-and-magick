'use strict';

window.render = (function () {
  var mainWizard = document.getElementsByClassName('setup-wizard')[0];
  var wizardTemplate = mainWizard.cloneNode(true);

  var changeIdToClass = function (node) {
    var id = node.id;
    if (id) {
      node.removeAttribute("id");
      node.classList.add(id);
    }
  };

  var iterateThroughChildren = function (node, task) {
    for (var i = 0; i < node.childNodes.length; i++) {
      var childNode = node.childNodes[i];
      task(childNode);
      if (childNode.childNodes.length > 0) {
        iterateThroughChildren(childNode, task);
      }
    }
  };

  changeIdToClass(wizardTemplate);
  iterateThroughChildren(wizardTemplate, changeIdToClass);
  wizardTemplate.style.width = 65;
  wizardTemplate.style.height = 65;
  wizardTemplate.classList.add('setup-similar-mage');

  return function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.setAttribute('title', wizard.name);

    return wizardElement;
  };
})();
