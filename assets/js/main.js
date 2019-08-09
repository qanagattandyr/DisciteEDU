console.log('Hola');
$(document).ready(function()
{
    $('#nav-menu>ul>li>a').click(function()
    {
        var btn_id = $(this).attr('id');
        btn_id = btn_id.substr(0, btn_id.length - 4);
        console.log(btn_id);
        document.querySelector("#"+btn_id).scrollIntoView({
            behavior: 'smooth'
        });
    });
    $(".cards").hover(function()
    {
        $(this).find(".card_img").css("filter","contrast(1)");
    },function()
    {
        $(this).find(".card_img").css("filter","contrast(0.5)");
    });

    $(".cards").click(function(){
        $('#layout').css("display","block");
        $('#enroll_window').css("display","block");
        $("html").css("overflow","hidden");
    });
    $('#layout').click(function()
    {
        $(this).css("display","none");
        $('#enroll_window').css("display","none");
        $("html").css("overflow","auto");
    });

    var width = document.documentElement.clientWidth;
    if(width < 990)
    {
        $("#nav-menu ul li").click(function()
        {
            console.log('Hola');
            $('#nav-menu').removeClass("in");

            $('#nav-menu').css('height','1px');
        });

        $("footer *").addClass("text-center");
    }

    for(var i = 1; i <= 6; i++)
    {
        // $("#card_img_"+i).css("background-image","url('./assets/img/card_img"+i+".png');");
        $("#card_img_"+i).css("background-image","url('./assets/img/card_img"+i+".png')");
        console.log("assets/img/card_img"+i+".png");
    }
});