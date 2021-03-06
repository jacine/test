/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/src/index.scss":
/*!****************************!*\
  !*** ./css/src/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./js/src/index.js":
/*!*************************!*\
  !*** ./js/src/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  'use strict';

  $.ajax({
    url: 'https://randomuser.me/api/?results=4',
    dataType: 'json',
    success: function success(data) {
      var cards = '';
      data.results.forEach(function (element) {
        cards += "\n          <article class=\"card\">\n            <div class=\"card__main\">\n              <div class=\"card__media\">".concat(cardImage(element), "</div>\n              <div class=\"card__content\">\n                <div class=\"card__header\">\n                  <h2 class=\"card__title\">").concat(cardName(element), "</h2>\n                  ").concat(cardDate(element), "\n                </div>\n                <p class=\"card__location\">").concat(cardLocation(element), "</p>\n              </div>\n              <button class=\"card__button\">\n                <span class=\"visually-hidden\">Toggle ").concat(cardName(element), "'s contact info</span>\n                <svg width=\"12\" height=\"8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.41.34L6 4.92 10.59.34 12 1.75l-6 6-6-6z\" /></svg>\n              </button>\n            </div>\n            <ul class=\"card__footer\">\n              <li><span class=\"card__label\">Phone</span> ").concat(element.phone, "</li>\n              <li><span class=\"card__label\">Email</span><a href=\"mailto:").concat(element.email, "\">").concat(element.email, "</a></li>\n            </ul>\n          </article>");
      }); // Add Cards to content.

      $('#main').html(cards); // Enable expandable cards.

      initCards();
    }
  });

  function cardImage(element) {
    var name = cardName(element);
    var alt = name ? "".concat(name, " headshot") : 'headshot';

    if (element.picture.medium) {
      return "<img src=\"".concat(element.picture.medium, "\" alt=\"").concat(alt, "\" width=\"60\" height=\"60\" />");
    }
  }

  function cardName(element) {
    return "".concat(element.name.first, " ").concat(element.name.last);
  }

  function cardDate(element) {
    if (element.dob.date) {
      var year = new Date(element.dob.date).getFullYear();
      return "<time class=\"card__date\" datetime=\"".concat(element.dob.date, "\">(").concat(year, ")</time>");
    }
  }

  function cardLocation(element) {
    if (element.location.city && element.nat) {
      var separator = ', ';
      return "".concat(element.location.city).concat(separator, " ").concat(element.nat);
    }
  }

  function initCards() {
    // Default state
    $('.header__toggle').attr('aria-expanded', false);
    $('.card__button').attr('aria-expanded', false);
    $('.card__footer').attr('aria-hidden', true);
    $('.card__button').click(function (e) {
      e.preventDefault();
      var $button = $(this); // Toggle classes.

      $button.toggleClass('is-expanded');
      $button.parents('.card').toggleClass('is-open'); // Toggle ARIA roles.

      if ($button.hasClass('is-expanded')) {
        $button.attr('aria-expanded', true);
        $button.parents('.card').find('.card__footer').attr('aria-hidden', false);
      } else {
        $button.attr('aria-expanded', false);
        $button.parents('.card').find('.card__footer').attr('aria-hidden', true);
      }
    });
    $('.header__toggle').click(function (e) {
      e.preventDefault();
      var $button = $(this); // Toggle/reset classes.

      $button.toggleClass('is-expanded');
      $('.card').removeClass('is-open'); // Toggle ARIA roles.

      if ($button.hasClass('is-expanded')) {
        $button.attr('aria-expanded', true);
        $('.card').addClass('is-open').find('.card__footer').attr('aria-hidden', false);
      } else {
        $button.attr('aria-expanded', false);
        $('.card').removeClass('is-open').find('.card__footer').attr('aria-hidden', true);
      }
    });
  }
})(jQuery);

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./js/src/index.js ./css/src/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jacine/Sites/testing/js/src/index.js */"./js/src/index.js");
module.exports = __webpack_require__(/*! /Users/jacine/Sites/testing/css/src/index.scss */"./css/src/index.scss");


/***/ })

/******/ });