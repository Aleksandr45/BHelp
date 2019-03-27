$(document).ready(function(){
	$('.handle').on('click', function(){
		$('nav ul').toggleClass('showing');
	});
	$(".bird").mPageScroll2id();
	$("nav ul li a").mPageScroll2id();
	$(".top").mPageScroll2id();
});	
var options = {
	offset: 200
}
var header = new Headhesive('header',options);