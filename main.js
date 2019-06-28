$(document).ready(function()
{
    console.log("Aloh");   
    $("#home").click(function()
    {
        document.querySelector("body").scrollIntoView({
            behavior: 'smooth'});
    });
    $("#navedu").click(function()
    {
        document.querySelector("#education").scrollIntoView({
            behavior: 'smooth'});
    }); 
    $("#navcamp").click(function()
    {
        document.querySelector("#camp").scrollIntoView({
            behavior: 'smooth'});
    });
    $("#navawards").click(function()
    {
        document.querySelector("#awards").scrollIntoView({
            behavior: 'smooth'});
    });
    $("#navother").click(function()
    {
        document.querySelector("#other").scrollIntoView({
            behavior: 'smooth'});
    });
    $("#navscores").click(function()
    {
        document.querySelector("#scores").scrollIntoView({
            behavior: 'smooth'});
    });
    $("#navcontact").click(function()
    {
        document.querySelector("#contact").scrollIntoView({
            behavior: 'smooth'});
    });
    var cnt0 = 0;
    if(window.innerHeight > window.innerWidth)
    {
        console.log($("body").width())
        $("#navbar").click(function()
        {
            console.log("nav");
            if(cnt0 % 2 == 0)
            {
                $(this).css("width", "100%");
                $("#navbar div").css("display", "block");
            }
            else
            {
                $(this).css("width", "15%");
                $("#navbar div").css("display", "none");
            }
            cnt0++;
        });
    }


    var currentY = 0;
    var breakpoint = 0;
    $(window).scroll(function () {
        currentY = $('#background').offset().top;
        breakpoint = $("#education").position().top;
        var breakpoint1 = $("#camp").position().top
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        // console.log(currentY);
        $("#background").css("transform","translateY("+(-currentY / 6)+"px)")
        $("#back1").css("transform","translateY("+((-currentY + breakpoint1 -250) / 6)+"px)")

        
        if(currentY > breakpoint + h)
        {
            $("#back1").css("display","block");
        }
        else
        {
            $("#back1").css("display","none");
        }
        
    });
    
});