'use strict';

const thumbs = document.querySelector('#thumbs');
thumbs.addEventListener('click', gallery);
function gallery(evnt) {
  evnt.preventDefault();
  const target = evnt.target;
  const urlLargeImg = document.querySelector('#largeImg');
  if (target.nodeName === 'IMG' || target.nodeName === 'A') {
    urlLargeImg.src = target.parentNode.href;
  };
};
