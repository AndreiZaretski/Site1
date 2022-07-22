$(function() {

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop() ;

    /*Header fixed*/

    checkScroll(scrollOffset)

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

        //    console.log(introH);
        //    console.log(scrollOffset);

           

    });

    function checkScroll(scrollOffset) {
        
        if (scrollOffset >= introH) {
            header.addClass("fixed");
           } else {
             header.removeClass("fixed")
           }
    }

    /*Smooth scroll*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
            
            $("#nav a").removeClass("active");
            $this.addClass("active");

    //    console.log(blockOffset);

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
       
    });

    /* Menu nav toggle*/

    $("#nav-toggle").on("click", function(event) {
      event.preventDefault(); //Стандартное поведение кнопки;
      
      $(this).toggleClass("active")
      $("#nav").toggleClass("active")
    });

    /*Collapse */

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass("active");
        // $(blockId).slideToggle(); достаточно просто выдать класс active
    });


    // Slider

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1 ,
        slidesToScroll: 1
    });


});