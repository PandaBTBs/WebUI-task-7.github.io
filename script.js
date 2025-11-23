$(document).ready(function(){
    $('.slider-gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, 
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1
                }
            }
        ]
    });
});
