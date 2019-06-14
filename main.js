$(document).ready(function()
{
    console.log("Aloh");   
    $("#home").click(function()
    {
        document.querySelector("#layout1").scrollIntoView({
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
});