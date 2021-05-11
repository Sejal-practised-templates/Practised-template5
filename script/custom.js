
// $(document).ready(function () {


//     $('[data-toggle="tooltip"]').tooltip();

//     var lastScrollTop = 0;
//     $(window).scroll(function (event) {
//         var st = $(this).scrollTop();
//         if (st > lastScrollTop && st > 0) {
//             $(".header-section").addClass("nav-down");
//         }
//         else {
//             $(".header-section").removeClass("nav-down");
//             if (st <= 0) {
//                 $(".header-section").removeClass("nav-down");
//             }
//             else {
//                 $(".header-section").addClass("nav-down");
//             }
//         }
//         lastScrollTop = st;
//     });

  
// });




    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 0) {
            $(".header-section").addClass("nav-down");
        }
        else {
            $(".header-section").removeClass("nav-down");
            if (st <= 0) {
                $(".header-section").removeClass("nav-down");
            }
            else {
                $(".header-section").addClass("nav-down");
            }
        }
        lastScrollTop = st;
    });



 $('.categories-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav: false,
        mouseDrag  : false,
        // navText: ["<p>prev</p>","<p>next</p>"],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:4,
            }
        }
    })






