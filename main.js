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
    if($("body").width() <= 600)
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
    
});