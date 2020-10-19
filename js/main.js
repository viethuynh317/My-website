const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }

}

const topIcon = document.querySelector('.top-icon');
$(window).scroll(() => {
  
  if($(window).scrollTop() >= 500){
    $('.top-icon').show();
  }else {
    $('.top-icon').hide();
  }
});

topIcon.addEventListener('click', () => {
  $('html, body').animate({
    scrollTop: 0 
  }, 2000);
});

$(document).ready(function(){
  $('.toggle-icons').click(() => {
    $('.nav-menu ul').toggleClass('nav-toggle');
  });
  
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive: responsive
});
});

AOS.init();