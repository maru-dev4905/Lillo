$(document).ready(function(){
    // input change event
    var appName     = $("#appName");
    var appDesc     = $("#appDesc");

    var appExampleTitle    = $(".appTitle");
    var appExampleDesc     = $(".appDesc");

    var thVal;

    var NAME_MAX_LENGTH = 30;
    var DESC_MAX_LENGTH = 80;

    appName.keyup(function(){
        var th = $(this);
        thVal = th.val();
        
        appExampleTitle.text(thVal);
        th.next().text(thVal.length + "/" + NAME_MAX_LENGTH);
    });
    
    appDesc.keyup(function(){
        var th = $(this);
        thVal = th.val();
        
        appExampleDesc.text(thVal);
        th.next().text(thVal.length + "/" + DESC_MAX_LENGTH);
    });


    // app icon change event
    var appIcon         = $("#appIcon");
    var appExampleIcon  = $(".appIcon img");

    appIcon.change(function(){
        var file = appIcon[0].files[0];
        if(file){
            appExampleIcon.attr("src",URL.createObjectURL(file))
            console.log(URL.createObjectURL(file));
        }
    });
    

    // theme setting
    var themeSettingBtn = $(".theme-setting .theme-btn");
    var phoneBar        = $(".phone-bar img");
    var PHONE_BAR_SRC   = "./images/visual/phone-bar-";

    themeSettingBtn.click(function(){
        var th      = $(this);
        var btnKind = th.find("button");

        themeSettingBtn.removeClass("active");
        th.addClass("active");
        btnKind = btnKind.attr("class")
        
        phoneBar.attr("src",PHONE_BAR_SRC + btnKind + ".png");
    });
    
});