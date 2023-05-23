$(function() {
    $('.imgslider').slick({
        arrows: false,
        speed: 300,
        infinite: true,
        autoplay:true,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
    });
    $("#prev1").click(function () {
        $(".imgslider").slick("slickPrev");
    });
    $("#next1").click(function () {
        $(".imgslider").slick("slickNext");
    });
});