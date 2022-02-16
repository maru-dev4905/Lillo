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
});