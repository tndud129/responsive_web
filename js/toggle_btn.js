$(function(){
    $(".menu_toggle_btn").click(function(){
        $(".gnb").stop().slideToggle("fast");
    }) //click


    $(".search_select_box span").hover(function(){
        $(".search_select_list").stop().slideDown(1000);
    }, function(){
        $(".search_select_list").stop().slideUp(500);
    }) // hover


}) //close