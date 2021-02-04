
// SWIPER
if (window.innerWidth > 900) {
  var slidesQuan = 5;
} else {
  if (window.innerWidth < 900 && window.innerWidth > 780) {
    var slidesQuan = 4;
  } else {
    if (window.innerWidth < 781 && window.innerWidth > 520) {
      var slidesQuan = 3;
    } else {
      var slidesQuan = 2;
    }
  }
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: slidesQuan,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
});

function getDirection() {
    var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';

    return direction;
}

// Запуск видео по кнопке Play
const play = document.querySelector('.play-video')
const video = document.querySelector('.yt-video')

play.addEventListener('click', function() {
   play.classList.toggle('video-hidden')
    video.classList.remove('video-hidden');
})