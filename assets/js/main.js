$(document).ready(function() {
  
  function tabs() {
    $('.we-do__tabs-nav .we-do__tab').on('click', function() {
      var id = $(this).attr('data-id');
      $(this).closest('.we-do__tabs').find('[data-id^="tab-"]').removeClass('current');
      $(this).closest('.we-do__tabs').find('[data-id="' + id + '"]').addClass('current');
    });
  }
  tabs();

  $('.team-slider').slick({
    arrows: true,
    prevArrow: $('.team__prev'),
    nextArrow: $('.team__next'),
    dots: false,
    slidesToShow: 4,
    speed: 1000,
    infinite: true,
    initialSlide: 0,
    draggable: false,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1294,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "100%" 
    }
  });

  var slides = document.querySelectorAll(".panel");

  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i], {pushFollowers: false})
      .addTo(controller);
  }

  var pinIntroScene =  new ScrollMagic.Scene({
    triggerElement: '.panel-team',
    triggerHook: 0,
    duration: "10%"
  })
  .setPin('.panel-team', {pushFollowers: false})
  .addTo(controller);

  // $(document).mousemove(function(e) {
  //   $('.cursor').eq(0).css({
  //     left: e.clientX,
  //     top: e.clientY
  //   });
  //   $('.cursor').eq(1).css({
  //     left: e.clientX,
  //     top: e.clientY
  //   });
  // });
});

const time = 4000;
const step = 1;

function outNumber(num, elem) {
  let counterNum = document.querySelector('.tieser__counter-numbers');
  n = 1000;
  let t = Math.round(time/(num/step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval)
    }
    counterNum.innerHTML = n;
  }, t);
}
outNumber(2 +'.'+ 000 +'.'+ 030 +'.'+021, '.tieser__counter-numbers')