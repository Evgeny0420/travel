'use strict';

(function () {
  var header = document.querySelector('.header__wrapper');
  var navButton = document.querySelector('.header__button-menu');
  var menu = document.querySelector('.menu-list');


  header.classList.remove('header__wrapper--nojs');
  menu.classList.remove('menu-list--nojs');

  var openMenu = function () {
    header.classList.remove('header__wrapper--closed');
    menu.classList.remove('menu-list--disabled');
    header.classList.add('header__wrapper--opened');
  };

  var closeMenu = function () {
    header.classList.add('header__wrapper--closed');
    menu.classList.add('menu-list--disabled');
    header.classList.remove('header__wrapper--opened');
  };


  navButton.addEventListener('click', function () {
    if (header.classList.contains('header__wrapper--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
})();
