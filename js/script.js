//NAVIGATION

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.header__content').addClass('sticky');
    } else {
        $('.header__content').removeClass('sticky');
    }
});


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




