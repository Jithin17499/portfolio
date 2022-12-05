function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});

//----------------------------ABOUT PAGE-----------------------

$(window).on("load resize scroll", function() {
    $(".bg-static").each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var leftPosition = windowTop - elementTop;
        $(this)
          .find(".bg-move")
          .css({ left: leftPosition });
    });
  });

  // ------------------- WORK PAGE --------------------------
  var filterActive;

  function filterCategory(category) {
      if (filterActive != category) {
          
          // reset results list
          $('.filter-cat-results .f-cat').removeClass('active');
          
          // elements to be filtered
          $('.filter-cat-results .f-cat')
              .filter('[data-cat="' + category + '"]')
              .addClass('active');
          
          // reset active filter
          filterActive = category;
          $('.filtering button').removeClass('active');
      }
  }
  
  $('.f-cat').addClass('active');
  
  $('.filtering button').click(function() {
      if ($(this).hasClass('cat-all')) {
          $('.filter-cat-results .f-cat').addClass('active');
          filterActive = 'cat-all';
          $('.filtering button').removeClass('active');
      } else {
          filterCategory($(this).attr('data-cat'));
      }
      $(this).addClass('active');
  });
  
  // PAGE TRANSITION FADE

  // To simulate fade in effect when page is loaded instead of the mundane sudden display of elements

$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1500);
  
    $('.link').click(function() {
      event.preventDefault();
  
      newLocation = this.href;
      $('body').fadeOut(2000, newPage);
    });
  
    function newPage() {
      window.location = newLocation;
    }
  });