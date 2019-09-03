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
    $('#background_abt').click(function(){
        document.querySelector("#about").scrollIntoView({
            behavior: 'smooth'
        });
    });
    $('#courses_abt').click(function(){
        document.querySelector("#courses").scrollIntoView({
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

    function layout_hide()
    {
        $('#layout').css("display","none");
        $('#course_window').css("display","none");
        $("html").css("overflow","auto");
        $('.cont').css("display","none");
    }
    $(".cards a").click(function(){
        $('#layout').css("display","block");
        $('#course_window').css("display","block");
        $("html").css("overflow","hidden");
        var course_title = $(this).find('h3').text();
        $("#course_window").find('.card_cont').find("h3").text(course_title);
        var course_link = $(this).data('link');
        $('#course_window .btn-primary').attr('href',course_link);
        $('#course_window .btn-danger').click(function()
        {
            layout_hide();
        });
        var course_id = $(this).data("id");
        console.log(course_id);
        $("#cont_"+course_id).css('display','block');

    });
    $('#layout').click(function()
    {
        layout_hide();
    });

    if(window.innerWidth < 994)
    {
        $('.navbar-collapse a').click(function (e) 
        {
            $('.navbar-collapse').collapse('toggle');
        });
    }
      
    for(var i = 1; i <= 6; i++)
    {
        // $("#card_img_"+i).css("background-image","url('./assets/img/card_img"+i+".png');");
        $("#card_img_"+i).css("background-image","url('./assets/img/card_img"+i+".png')");
        console.log("assets/img/card_img"+i+".png");
    }
});