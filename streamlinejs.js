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

  
// ----------------------- PROGRESS BAR

$(document).ready(function(){
  $(".progressBar").css("width", window.pageYOffset + "%");
  function map(currentA, maxA , maxB ){
    return (currentA * maxB) / maxA;
  }
  //on scroll event
  $(window).scroll(function(){
    var pageMaxY = $(document).height() - $(window).height();
    $(".progressBar").css("width", map(window.pageYOffset, pageMaxY,100) + "%");
  });
});

// FAQ

$('.faq-heading').click(function () {

  $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});

