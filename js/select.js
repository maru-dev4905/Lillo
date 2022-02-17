$(document).ready(function(){
    var select = $(".selectTop");
    var selectBtn = $(".selectBtn");

    select.click(function(){
        var th = $(this);

        if(th.next().hasClass("show")){
            th.next().removeClass("show");
            th.css("color","#767676")
        }else{
            th.next().addClass("show");
            th.css("color","#000")
        }
    });

    selectBtn.click(function(){
        var th = $(this);

        th.closest(".selectContent").removeClass("show");
        th.closest(".selectContent").prev().css("color","#767676")
        th.closest(".selectContent").prev().find("span").text(th.text());
        
    });
    
});