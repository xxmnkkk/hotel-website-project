// $(document).ready(function() {
//     $("#submit-button").click(function() {
//         console.log("Form Submitted")
//     })
// })


$(document).ready(function() {
    $(".scroll-link").on("click", function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        var offset = $(target).offset().top;

        $("html , body").animate(
            {
                scrollTop: offset
            }, 
            500,
            function() {
                $(target).addClass("active");
            }
        )
    })

    // Remove the active class when scrolling to another section
    $(window).on("scroll", function() {
        $(".section").each(function() {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            var windowTop = $(window).scrollTop();

            if (windowTop >= top && windowTop <= bottom){
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        })
    })
})
