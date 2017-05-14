/**
 * 
 */

$(function() {
	$("#login").click(function() {
		window.location.href="login.jsp";
	})
	$("#register").click(function() {
		$("#myModal").modal("show");
	})
	$("#guanyuyangsheng").click(function() {
		$("#right_page").load("guanyuyangsheng.jsp");
	})
	$("#shouye").click(function() {
		$("#right_page").load("shouye.jsp");
	})
	$("#right_page").load("shouye.jsp");
	$('body').prop({
		'scrollTop' : '0'
	}, 1000);
	console.log($('inpurt[name="type"]'));
	$('#submitregister').click(function() {
		alert("tttt");
		console.log($('inpurt[name="type"]'));
	})
	$('inpurt[name="type"]').change(function() {
		console.log("ttt");
	})
})

function showModal() {
	console.log("test");
	$("#myModal").modal("show");
}