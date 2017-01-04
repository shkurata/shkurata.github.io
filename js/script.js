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

  $('#submit input').on('click', function(event) {
    var form = $('#sendMessage');
    var name = $('input[name=\'name\']').val();
    var email = $("input[name='email']").val();
    var phone = $("input[name='phone']").val();
    var message = $("textarea[name='message']").val();
      if ($(this).closest('form')[0].checkValidity()) {
        event.preventDefault();
        $.ajax({
            url: "../mail/contact_me.php",
            type: "POST",
            data: {
                name: name,
                phone: phone,
                email: email,
                message: message
            },
            cache: false,
            success: function() {
              alert('success');
            },
            error: function() {
              alert('error');
            }
          });
        // $('#sendMessage')
        // .attr('action', 'https://formspree.io/nikolai.neikov@gmail.com')
        // .submit();
        //alert('submit clicked');
    }
  });

});
