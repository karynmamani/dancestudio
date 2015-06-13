
	$(function() {
	  $('nav a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	})


	$(window).scroll(function(){
	var prueba = $(this).scrollTop();
	if (prueba > 550) {
		$(".navbar-default").addClass("scroll");	
	}
		else if (prueba < 550) {
		$(".navbar-default").removeClass("scroll");
	 }
});
