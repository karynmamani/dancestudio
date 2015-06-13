$(document).ready(function(){
	$(".circulo-externo").hover(function(){
		$(".circulo-interno").toggleClass("hidden");
		$(".cirulo-hover").toggleClass("hidden");
	});
});