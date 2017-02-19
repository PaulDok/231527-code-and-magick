'use strict';

window.load = (function () {
  return function (url, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (evt) {
      if (evt.target.status >= 200) {
        onLoad(evt.target.response);
      } else {
        onLoad([]);
      }
    });

    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.send();
  };
})();
