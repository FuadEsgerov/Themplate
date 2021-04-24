/* ---------------------------------------------- /*
   * header fixed
  /* ---------------------------------------------- */
var body = document.querySelector("body");
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  if (scrollPosition >= 100) {
    body.classList.add("fixed-header");
  } else {
    body.classList.remove("fixed-header");
  }
});
/* ---------------------------------------------- /*
   * TypeIT
  /* ---------------------------------------------- */
new TypeIt("#type-it", {
  loop: true,
  strings: ["Designer and Developer"],
}).go();
/* ---------------------------------------------- /*
   * OwlCarousel
  /* ---------------------------------------------- */
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    smartSpeed: 1000,
    autospeed: 5000,
    autoHeight: false,
    center: false,
    margin: 30,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      },
      980: {
        items: 2,
      },
      1200: { items: 2 },
    },
  });
});
/* ---------------------------------------------- /*
   * Isotype
/* ---------------------------------------------- */
var portfolioWork = $('.portfolio-content');
$(portfolioWork).isotope({
    resizable: false,
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    filter: '*'
  });
    var portfolioFilter = $('.filter li');
    $(portfolioFilter).on( 'click', function() {
      var filterValue = $(this).attr('data-filter');
      portfolioWork.isotope({ filter: filterValue });
    });
    $(portfolioFilter).on( 'click', function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
/* ---------------------------------------------- /*
   * MagnificPopup
/* ---------------------------------------------- */

$(".lightbox-gallery").magnificPopup({
  delegate: ".gallery-link",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-fade",
  fixedContentPos: true,
  closeBtnInside: false,
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after NAY current image
  },
});
  /*--------------------
        * One Page
    ----------------------*/

$('.header-nav a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 60,
              }, 1000);
              return false;
          }
    }
});