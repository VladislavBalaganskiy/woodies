$(function() {
    let menuOpen = false;
    let burger = $('#burger');
    let burgerMenu = $('#burgerMenu');
    let header = $('#header');


    /*BURGER*/
    $('#burger').click (function() {
        if (!menuOpen) {
            burger.addClass("open");
            burgerMenu.addClass("open");
            header.addClass("hide");
            menuOpen = true;
        } else {
            burger.removeClass("open");
            burgerMenu.removeClass("open");
            header.removeClass("hide");
            menuOpen = false;
        } 
      });


    /*SCROLL*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
    
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
    
        burger.removeClass("open");
        burgerMenu.removeClass("open");
        menuOpen = false;
    
    
        $("html, body").animate({
          scrollTop: elementOffset - 40
        }, 700);
    });


    /*FIXED HEADER */
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function() {
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

});