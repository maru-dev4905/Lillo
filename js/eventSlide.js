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
        // 드래그 막는 코드
        simulateTouch:false
    });
});