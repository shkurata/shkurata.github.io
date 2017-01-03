$(document).ready(function() {

  $('nav ul li a').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });

  
});
