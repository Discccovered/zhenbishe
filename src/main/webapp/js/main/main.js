/**
 *
 */

$(function(){
    $("#login").click(function(){
        $("#loginModal").modal("show");
    })
    $("#register").click(function(){
        $("#myModal").modal("show");
    })
    $("#guanyuyangsheng").click(function(){
    	$("#right_page").load("guanyuyangsheng.jsp");
    })
    $("#shouye").click(function(){
    	$("#right_page").load("shouye.jsp");
    })
    $("#right_page").load("shouye.jsp");
    $('body').prop({'scrollTop':'0'},1000);
})

function showModal(){
    console.log("test");
    $("#myModal").modal("show");
}