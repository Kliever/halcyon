$(function(){

//menu----------------

  $('.menu-btn').on('click', function () {
    $('.header').toggleClass('header--active');
  })


//menu----------------

  $('.design__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    fade: true
  });

  $('.problems__slider').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.team__slider').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.menu-btn').on('click', function (){
    $('.menu-btn').toggleClass('menu-btn--active');
  })


  $('.problems__btn-wrapper').on('click', function (){
    $('.problems__btn-wrapper').toggleClass('problems__btn-wrapper--active');
    $('.problems__bottom-inner').toggleClass('problems__bottom-inner--active');
    $('.problems__bottom').toggleClass('problems__bottom--active');
  })

  $('.contacts__slide-btn').on('click', function () {
    $('.contacts__info-wrapper').toggleClass('contacts__info-wrapper--active');
    $('.contacts__info').toggleClass('contacts__info--active');
    $('.contacts__slide-btn').toggleClass('contacts__slide-btn--active');
  })
// popup-map
  $('.contacts__info-item-addres').on('click', function () {
    $('.popup-map').fadeIn();
  });


  // закрыть на крестик
  $('.popup-map__item-btn').on('click', function () {
    $('.popup-map').fadeOut();
  });


  // закрыть по клику вне окна
  $(document).on('mouseup', function (e) {
    var popup = $('.popup-map__item');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.popup-map').fadeOut();
    }
  });
//popup-map


});