$(document).ready(function(){
    var pushAlarm = $(".push-alarm-wrap");
    var pushAlarmBtn = pushAlarm.find(".push-alarm-btn");
    
    pushAlarmBtn.click(function(){
        if(pushAlarm.hasClass("show")){
            pushAlarm.removeClass("show");
        }else{
            pushAlarm.addClass("show");
        }
    });


    var bookmarkBtn = $(".bookmark-btn");
    
    bookmarkBtn.click(function(){
        var th = $(this);
        var imgSRC = th.find("img").attr("src");
        var ACTIVE_SRC = "./images/icon/ico-bookmarkActive.svg";
        var DEFAULT_SRC = "./images/icon/ico-bookmark.svg";

        if(th.find("img").attr("src") == ACTIVE_SRC){
            th.find("img").attr("src",DEFAULT_SRC);
        }else{
            th.find("img").attr("src",ACTIVE_SRC);
        }
    });
});