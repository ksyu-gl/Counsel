// PARALLAX

$(window).scroll(function () {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.main-bg').css('top', -(scrolled * 0.1) + 'px');
  $('.banner').css('top', 50 + (scrolled * 0.1) + '%');
  $('.banner').css('opacity', 1 - (scrolled * 0.01) / 10);
  $('.header').css('top', 50 + (scrolled * 0.1) + '%');
  $('.header').css('opacity', 1 - (scrolled * 0.01) / 10);
}


// YANDEX

ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map('mapOne', {
          center: [34.055369, -118.210377],
          zoom: 9
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContent: 'Маленькая иконка'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.png',
          iconImageSize: [75, 79],
          iconImageOffset: [-30, -39],
      });

  myMap.geoObjects.add(myPlacemark);
  var myMap = new ymaps.Map('mapTwo', {
        center: [36.284027, -119.127742],
        zoom: 9
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContent: 'Маленькая иконка'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.png',
          iconImageSize: [75, 79],
          iconImageOffset: [-30, -39],
      });

  myMap.geoObjects.add(myPlacemark);
  var myMap = new ymaps.Map('mapThree', {
        center: [51.505503, -0.125587],
        zoom: 9
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContent: 'Маленькая иконка'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.png',
          iconImageSize: [75, 79],
          iconImageOffset: [-30, -39],
      });

  myMap.geoObjects.add(myPlacemark);
}



// SLIDER

$('.review__block').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500, 
  });
 
