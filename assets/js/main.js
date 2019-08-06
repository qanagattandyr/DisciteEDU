console.log('Hola');
$(document).ready(function()
{

    $("#courses_btn").click(function(){
        document.querySelector("#courses").scrollIntoView({
            behavior: 'smooth'
        });
    });
    $("#about_btn").click(function(){
        document.querySelector("#about").scrollIntoView({
            behavior: 'smooth'
        });
    });
    $("#contact_btn").click(function(){
        document.querySelector("footer").scrollIntoView({
            behavior: 'smooth'
        });
    });
    $("#background_abt").click(function(){
        document.querySelector("#about").scrollIntoView({
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
    console.log(window.location.pathname);
    for(var i = 1; i <= 6; i++)
    {
        // $("#card_img_"+i).css("background-image","url('./assets/img/card_img"+i+".png');");
        $("#card_img_"+i).css("background-image","url('./assets/img/card_img"+i+".png')");
        console.log("assets/img/card_img"+i+".png");
    }
    var width = window.innerWidth;
    if(width < 768)
    {
        $("#nav-menu ul li").click(function()
        {
            $('#nav-menu').removeClass("in");

            $('#nav-menu').css('height','1px');
        });

        $("footer *").addClass("text-center");
    }
});