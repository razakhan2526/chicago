// START NAVIGATION BACKGROUND BLUR EFFECT
$(document).ready(function () {
  $(".middle-bg-1").hover(function () {
    $(".middle-bg-2").addClass("image-opacity");
    $(".middle-bg-3").addClass("image-opacity");
    $(".middle-bg-4").addClass("image-opacity");
  }, function () {
    $(".middle-bg-2").removeClass("image-opacity");
    $(".middle-bg-3").removeClass("image-opacity");
    $(".middle-bg-4").removeClass("image-opacity");
  });

  $(".middle-bg-2").hover(function () {
    $(".middle-bg-1").addClass("image-opacity");
    $(".middle-bg-3").addClass("image-opacity");
    $(".middle-bg-4").addClass("image-opacity");
  }, function () {
    $(".middle-bg-1").removeClass("image-opacity");
    $(".middle-bg-3").removeClass("image-opacity");
    $(".middle-bg-4").removeClass("image-opacity");
  });

  $(".middle-bg-3").hover(function () {
    $(".middle-bg-1").addClass("image-opacity");
    $(".middle-bg-2").addClass("image-opacity");
    $(".middle-bg-4").addClass("image-opacity");
  }, function () {
    $(".middle-bg-1").removeClass("image-opacity");
    $(".middle-bg-2").removeClass("image-opacity");
    $(".middle-bg-4").removeClass("image-opacity");
  });

  $(".middle-bg-4").hover(function () {
    $(".middle-bg-1").addClass("image-opacity");
    $(".middle-bg-2").addClass("image-opacity");
    $(".middle-bg-3").addClass("image-opacity");
  }, function () {
    $(".middle-bg-1").removeClass("image-opacity");
    $(".middle-bg-2").removeClass("image-opacity");
    $(".middle-bg-3").removeClass("image-opacity");
  });
});
// END NAVIGATION BACKGROUND BLUR EFFECT
// START OWL CAROUSEL
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    pause: false,
    navText: ["<div class='nav-button-1 owl-prev'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-button-2 owl-next'><i class='fas fa-chevron-right'></i></div>"],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      575: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });
});
// END OWL CAROUSEL

// START SIDE NAV MENU
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "300px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
// END SIDE NAV MENU


// 
$(document).ready(function () {
  // add all to same gallery
  $(".gallery a").attr("data-fancybox", "mygallery");
  // assign captions and title from alt-attributes of images:
  $(".gallery a").each(function () {
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  // start fancybox:
  $(".gallery a").fancybox();
});

//

// Preloader Start
$(document).ready(function () {

  setTimeout(function () {
    $('#preload-content').fadeOut(2500, function () {
      $('#preloadcontainer').fadeOut(2500);
      setTimeout(function () {
        $('.fade-in').each(function (index) {
          $(this).delay(600 * index).animate({
            top: 0,
            opacity: 1
          }, 900);
        });
      }, 900);
    });
  }, 300);
});
// Preloader End
// BACK TO TOP
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});
// BACK TO TOP

// Preloader Start
$(document).ready(function () {
  setTimeout(function () {
    $('#preload-content').fadeOut(2000, function () {
      $('#preloadcontainer').fadeOut(2000);
      setTimeout(function () {
        $('.fade-in').each(function (index) {
          $(this).delay(600 * index).animate({
            top: 0,
            opacity: 1
          }, 900);
        });
      }, 900);
    });
  }, 300);
});
// Preloader End