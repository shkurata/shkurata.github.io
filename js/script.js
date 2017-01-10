$(document).ready(function() {

  function navSize() {
    return $('nav').outerHeight() > 60 ? 0 : $('nav').outerHeight();
  }

  $(window).on('load resize', function() {
    var vpHeight = $(window).height();
    $('#home').css('height', vpHeight);
    $('#home h1').css('margin-top', vpHeight / 2 - 100);
    $('.arrow').css({
      bottom: '0',
      left: $(window).width() / 2 - 35 + (navSize() > 0 ? 0 : 25)
    });
    $('#home > *').show();
  });

  function moveToSection($section) {
    $('html,body').animate({
      scrollTop: $section.offset().top - navSize() - 20
    }, 500);
  }

  $('nav ul li a').on('click', function(event){
    event.preventDefault();
    moveToSection($(this.hash));
  });

  $('.arrow').on('click', function() {
    moveToSection($('#portfolio'));
  });

  $(window).on('scroll', function() {
    var currentPossition = $(this).scrollTop();
    $('section').each(function() {
      var top = $(this).offset().top - navSize() - $(window).height() / 2,
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
