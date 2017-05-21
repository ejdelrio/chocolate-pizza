'use strict';

var checkList = document.getElementsByTagName('input');

function strikeThrough () {
  if (this.checked) {
    this.parentElement.style.textDecoration = 'line-through';
  } else {
    this.parentElement.style.textDecoration = 'none';
  }
}

for (var i = 0; i < checkList.length; i++) {
  checkList[i].addEventListener('change', strikeThrough);
}
