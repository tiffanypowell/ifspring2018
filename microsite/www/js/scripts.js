$(document).ready(function(){ /*Makes sure doc is loaded before looking*/

	$(".header").fadeIn(1300);
	$("#two").hide();
	$("#three").hide();
	$(".rolltext").hide();

	$(".arrow-1").click(function(){
		$("#two").fadeIn(800);
		$("#one").fadeOut(800);
	});

	$(".arrow-2").click(function(){
		$("#three").fadeIn(800);
		$("#two").fadeOut(800);
	});

	$(".arrow-3").click(function(){
		$("#one").fadeIn(800);
		$("#three").fadeOut(800);
	});


	$(".workplace-a").mouseover(function(){
		$(".workplace-title").fadeOut(400);
		$(".workplace-text").fadeIn(400);
	});

	$(".workplace-a").mouseleave(function(){
		$(".workplace-title").fadeIn(400);
		$(".workplace-text").fadeOut(400);
	});


	$(".architecture-a").mouseover(function(){
		$(".architecture-title").fadeOut(400);
		$(".architecture-text").fadeIn(400);
	});

	$(".architecture-a").mouseleave(function(){
		$(".architecture-title").fadeIn(400);
		$(".architecture-text").fadeOut(400);
	});

	$(".archaeology-a").mouseover(function(){
		$(".archaeology-title").fadeOut(400);
		$(".archaeology-text").fadeIn(400);
	});

	$(".archaeology-a").mouseleave(function(){
		$(".archaeology-title").fadeIn(400);
		$(".archaeology-text").fadeOut(400);
	});

	$(".education-a").mouseover(function(){
		$(".education-title").fadeOut(400);
		$(".education-text").fadeIn(400);
	});

	$(".education-a").mouseleave(function(){
		$(".education-title").fadeIn(400);
		$(".education-text").fadeOut(400);
	});


	// $(".box").click(function(){
	// 	$(this).toggleClass("large");
	// 	var boxHeight = $(this).height();
	// 	console.log("The height is now: " + boxHeight);
	// 	// alert("The height is now: " + boxHeight);
	// });

// $("p").click(function(){
// 	$(this).hide(); hides this p
// /*	$("p").hide(); hides every p*/
});