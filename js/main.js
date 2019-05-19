$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  nextArrow: '<button class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button> ',
  prevArrow: '<button class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button> ',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 350,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});
$('.tour-items').slick({
  infinite: true,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  nextArrow: '<button class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button> ',
  prevArrow: '<button class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button> ',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 350,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});
$('.reviews-slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [

    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


$(function () {
  $('.burger_trigger, .drop-mob').click(function(){
    $('.drop-mob').toggleClass('menu_opened');
  })
  $('.burger_trigger').click(function(event) {
      if ($(event.target).closest(".burger_trigger").length ) return;
      $('.drop-mob').removeClass('menu_opened');
      event.stopPropagation();
  });



});

$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('.accordeon .acc-head').on('click', f_acc);
});

function f_acc(){
//скрываем все кроме того, что должны открыть
  $('.accordeon .acc-body').not($(this).next()).slideUp(1000);
// открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(500);
}

var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-200);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}
