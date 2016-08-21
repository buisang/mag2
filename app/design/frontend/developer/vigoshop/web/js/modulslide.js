
define(
    ['jquery','js/owl.carousel'],function ($,owljs) {
        $('#owl-demo').owlCarousel({
            autoPlay: 7000,
            navigation :true,// Show next and prev buttons
            slideSpeed :300,
            paginationSpeed :400,
            singleItem:true
        });

    }
);