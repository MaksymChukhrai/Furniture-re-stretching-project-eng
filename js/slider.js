$(document).ready(function(){
  $('.ourworks').slick({
    // Настройки слайдера
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 700,
    arrows: true,
    dots: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1500,
    // Другие настройки по вашему выбору
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 1
        }
      }
    ]
  });
});



  //--------Aboutus slider--------
  $(document).ready(function(){
    $('.feedback-img').slick({
      slidesToShow: 3, // Количество отображаемых слайдов
      slidesToScroll: 1,
      infinite: true,
      speed: 900,
      arrows: true,
      dots: true,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
        autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1200, // Свойства для min-width: 1440px
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true // Отключаем variableWidth для уменьшения размеров слайдов
          }
        },
        {
          breakpoint: 768, // Свойства для min-width: 768px
          settings: {
            slidesToShow: 1,
            centerMode: false,
            variableWidth: false,
            arrows: false
           
          }
        }
        // Можете добавить дополнительные настройки для других разрешений
      ]
    });
  });
  