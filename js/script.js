$(document).ready(function() {

  $('nav ul li a').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });

  $(window).on('scroll', function() {
    var currentPossition = $(this).scrollTop();

    $('section').each(function() {
      var top = $(this).offset().top - $('nav').outerHeight(),
      bottom = top + $(this).outerHeight();

      if (currentPossition >= top && currentPossition <= bottom) {
        $('nav').find('a').removeClass('activeNavItem');
        $('nav').find('a[href="#' + $(this).attr('id') + '"]')
          .toggleClass('activeNavItem');
      }

    });
  });

});
