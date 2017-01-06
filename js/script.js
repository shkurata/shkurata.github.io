$(document).ready(function() {

  $('nav ul li a').on('click', function(event){
    var $navHeight = $('nav').outerHeight();
    var $navSize = $navHeight > 60 ? 0 : $navHeight;
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - $navSize - 20
    }, 500);
  });

  $(window).on('scroll', function() {
    var currentPossition = $(this).scrollTop();
    $('section').each(function() {
      var top = $(this).offset().top - $('nav').outerHeight() - $(window).height() / 2,
      bottom = top + $(this).outerHeight();
      if (currentPossition >= top && currentPossition <= bottom) {
        $('nav').find('a').removeClass('activeNavItem');
        $('nav').find('a[href="#' + $(this).attr('id') + '"]')
          .toggleClass('activeNavItem');
      }
    });
  });

  var $form = $('#sendMessage');
  $form.submit(function(e) {
  	e.preventDefault();
  	$.ajax({
  		url: 'https://formspree.io/nikolai.neikov@gmail.com',
  		method: 'POST',
  		data: $(this).serialize(),
  		dataType: 'json',
  		beforeSend: function() {
        $('#info').children().each(function() {
          $(this).hide();
        });
        $('div.send').show();
  		},
  		success: function(data) {
        $form.trigger('reset');
        $('div.send').hide();
        $('div.success').show();
  		},
  		error: function(err) {
        $('div.send').hide();
        $('div.error').show();
  		}
    });
  });
});
