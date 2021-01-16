$(function() {

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    
    let burgerMenu = $('#burgerMenu');
    burgerMenu.removeClass("open");


    $("html, body").animate({
      scrollTop: elementOffset - 60
    });
  });

});
