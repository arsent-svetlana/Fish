$(function () {

   $('.header-slider').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows-prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/arrows-next.svg" alt=""></button>',
      vertical: true,
      responsive: [
         {
            breakpoint: 371,
            settings: {
               dots: false,
               arrows: false,
               autoplay: true,
               autoplaySpeed: 2000,
            }
         }
      ]
   });


   $('.product__name').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      // arrows: false,
      focusOnSelect: true,
      centerMode: true,
      prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
      asNavFor: '.product__content',
      vertical: true,
      responsive: [
         {
            breakpoint: 891,
            settings: {
               vertical: false,
               arrows: false,
               slidesToShow: 3,
               centerMode: false,
               dots: true,
            }
         },
         {
            breakpoint: 585,
            settings: {
               vertical: false,
               arrows: false,
               slidesToShow: 2,
               centerMode: false,
               dots: true,
            }
         },
         {
            breakpoint: 461,
            settings: {
               slidesToShow: 1,
               vertical: false,
               arrows: false,
               centerMode: false,
               dots: true,
            }
         }
      ]
   });
   $('.product__content').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.product__name',
      fade: true,

      arrows: false,
   });
   $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
   });

});