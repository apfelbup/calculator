$(document).ready(function () {
    $(".select").select2({

        minimumResultsForSearch: Infinity,

    })
});

$(document).ready(function () {
    $(".select-number").select2({

        minimumResultsForSearch: Infinity,

    })
})

$(document).ready(function () {
    $('.img__block-slider').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        arrows: true,
        speed: 500,
        useTransform: true,
        cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    });
})

