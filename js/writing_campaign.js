$(document).ready(function(){
    var contentTitleInput1       = $("#content-title1");
    var contentDescInput1        = $("#content-desc1");
    var contentThumbnailInput1   = $("#content-img1");

    var exampleTitle1        = $(".example-title").eq(0);
    var exampleText1         = $(".example-text").eq(0);
    var exampleThumbnail1    = $(".example-desc .thumbnail img").eq(0);

    contentTitleInput1.keyup(function(){
        var th = $(this);
        thVal = th.val();

        exampleTitle1.text(thVal);
    });

    contentDescInput1.keyup(function(){
        var th = $(this);
        thVal = th.val();

        exampleText1.text(thVal);
    });

    contentThumbnailInput1.change(function(){
        var file = contentThumbnailInput1[0].files[0];
        if(file){
            exampleThumbnail1.attr("src",URL.createObjectURL(file))
        }
    });

    var contentTitleInput2       = $("#content-title2");
    var contentDescInput2        = $("#content-desc2");
    var contentThumbnailInput2   = $("#content-img2");

    var exampleTitle2        = $(".example-title").eq(1);
    var exampleText2         = $(".example-text").eq(1);
    var exampleThumbnail2    = $(".example-desc .thumbnail img").eq(1);

    contentTitleInput2.keyup(function(){
        var th = $(this);
        thVal = th.val();

        exampleTitle2.text(thVal);
    });

    contentDescInput2.keyup(function(){
        var th = $(this);
        thVal = th.val();

        exampleText2.text(thVal);
    });

    contentThumbnailInput2.change(function(){
        var file = contentThumbnailInput2[0].files[0];
        if(file){
            exampleThumbnail2.attr("src",URL.createObjectURL(file))
        }
    });

    var toggleBtn = $(".toggle-btn");

    toggleBtn.click(function(){
        var th = $(this);
        
        if(th.closest(".toggle").hasClass("active")){
            th.closest(".toggle").removeClass("active");
            
            $(".toggle-content-header").eq(1).addClass("hide");
            $(".toggle-content-header").eq(0).addClass("hide");
            
            $(".example-tag").addClass("hide");
            $(".example-content").eq(1).addClass("hide");

            
            toggleContentBtn.eq(0).addClass("active");
            toggleContentBtn.eq(1).removeClass("active");

        }else{
            th.closest(".toggle").addClass("active");
            
            $(".toggle-content-header").eq(1).removeClass("hide");
            $(".toggle-content-header").eq(0).removeClass("hide");

            $(".example-tag").removeClass("hide");
            $(".example-content").eq(1).removeClass("hide");
        }
    });

    var toggleContentBtn = $(".toggle-content-header");

    toggleContentBtn.eq(0).click(function(){
        toggleContentBtn.eq(0).addClass("active");
        toggleContentBtn.eq(1).removeClass("active");
    });
    toggleContentBtn.eq(1).click(function(){
        toggleContentBtn.eq(1).addClass("active");
        toggleContentBtn.eq(0).removeClass("active");
    });



    var successBtn = $(".success-btn");

    successBtn.click(function(){
        var th = $(this);

        th.closest(".popup").removeClass("active");
        $(".dim").removeClass("active");
    });


    var contentSettingBtn = $(".content-setting-btn");

    contentSettingBtn.click(function(){
        $("#contentSettingPopup").addClass("active");
        $(".dim").addClass("active");
    });
});