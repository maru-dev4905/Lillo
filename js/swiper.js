$(document).ready(function(){
    var eventSlide = new Swiper(".event-slide", {
        slidesPerView: "auto",
        direction: "vertical",
        loop: true,
        speed:750,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        simulateTouch:false
    });

    var pushAlarmSlide = new Swiper(".pushAlarm-slide", {
        slidesPerView: "auto",
        spaceBetween:20,
        loop: false,
        speed:750
    });
    pushAlarmSlide.on('slideChange', function () {
        if(this.realIndex == 0){
            $(".pushAlarm-slide").addClass("after");
            $(".pushAlarm-slide").removeClass("before");
        }else if(this.realIndex == $(".pushAlarm-slide .swiper-slide").length - 3){
            $(".pushAlarm-slide").removeClass("after");
            $(".pushAlarm-slide").addClass("before");
        }else{
            $(".pushAlarm-slide").addClass("after");
            $(".pushAlarm-slide").addClass("before");
        }
    });
});