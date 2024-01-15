$(document).ready(function(){
    $('.ourworks').slick({
      // Настройки слайдера
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 700,
      arrows: true,
      dots: true,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 1500
      // Другие настройки по вашему выбору
    });
  });