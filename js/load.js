'use strict';

window.load = (function () {
  return function (url, onLoad) {
    var errorHandler = function (err) {
      console.log(err);
    }

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (evt) {
      if (evt.target.status >= 400) {
        errorHandler('Failed to load data. Server returned status: ' + evt.target.status);
      } else if (evt.target.status >= 200) {
        onLoad(evt.target.response);
      }
    });
    xhr.addEventListener('error', errorHandler);

    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.send();
  };
})();
