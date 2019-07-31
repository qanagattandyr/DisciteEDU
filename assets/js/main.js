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
    $(".cards").hover(function()
    {
        $(this).find(".card_img").css("filter","contrast(1)");
    },function()
    {
        $(this).find(".card_img").css("filter","contrast(0.5)");
    });
});