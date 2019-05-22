(function ($) {
  'use strict';

  $.ajax({
    url: 'https://randomuser.me/api/?results=4',
    dataType: 'json',
    success: function (data) {

      let cards = '';
      data.results.forEach(element => {
        cards += `
          <article class="card">
            <div class="card__main">
              <div class="card__media">${cardImage(element.picture.medium)}</div>
              <div class="card__content">
                <div class="card__header">
                  <h2 class="card__title">${cardName(element.name)}</h2>
                  ${cardDate(element)}
                </div>
                <p class="card__location">${cardLocation(element)}</p>
              </div>
              <button class="card__button">
                <svg width="12" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M1.41.34L6 4.92 10.59.34 12 1.75l-6 6-6-6z" /></svg>
              </button>
            </div>
            <ul class="card__footer">
              <li><span class="card__label">Phone</span> ${element.phone}</li>
              <li><span class="card__label">Email</span><a href="mailto:${element.email}">${element.email}</a></li>
            </ul>
          </article>`;
      });

      // Add Cards to content.
      $('#main').html(cards);

      // Enable expandable cards.
      initCards();
    }
  });

  function cardImage(image, name) {
    let alt = name ? `${name} headshot` : 'headshot';
    if (image) {
      return `<img src="${image}" alt="${alt}" width="60" height="60" />`;
    }
  }

  function cardName(name) {
    return `${name.first} ${name.last}`;
  }

  function cardDate(element) {
    if (element.dob.date) {
      var year = new Date(element.dob.date).getFullYear();
      return `<time class="card__date" datetime="${element.dob.date}">(${ year })</time>`;
    }
  }

  function cardLocation(element) {
    if (element.location.city && element.nat) {
      let separator = ', ';
      return `${element.location.city}${separator} ${element.nat}`;
    }
  }

  function initCards() {
    // Default state
    $('.card__button').attr('aria-expanded', false);
    $('.card__footer').attr('aria-hidden', true);

    $('.card__button').click(function (e) {
      e.preventDefault();
      let $button = $(this);

      // Toggle classes.
      $button.toggleClass('is-expanded');
      $button.parents('.card').toggleClass('is-open');

      // Toggle ARIA roles.
      if ($button.hasClass('is-expanded')) {
        $button.attr('aria-expanded', true);
        $button.parents('.card').find('.card__footer').attr('aria-hidden', false);
      }
      else {
        $button.attr('aria-expanded', false);
        $button.parents('.card').find('.card__footer').attr('aria-hidden', true);
      }
    });
  }

})(jQuery);
