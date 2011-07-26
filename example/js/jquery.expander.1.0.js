(function($){

	/*	==================================================
	
		
		Copyright 2011 Anthony Colangelo
		www.acolangelo.com
		
		jQuery Expander 1.0 built with jQuery 1.4.2
		
		USAGE INFORMATION
		This jQuery plugin is free to use, but please give credit where credit is due
	
	
	==================================================  */
	
	$.fn.expander = function(options){
		var o = $.extend({
			smallWidth: '300px',
			largeWidth: '800px',
			duration: 500,
			easing: 'swing'
		},options);
		
		$(this).live('click',function(){
			if($(this).hasClass('expanded')){			
				$(this).removeClass('expanded').stop().animate({
					width: o.smallWidth
				},o.duration,o.easing);
			}else{			
				$(this).addClass('expanded').stop().animate({
					width: o.largeWidth
				},o.duration,o.easing);
			}
			return false;
		});
	}
})(jQuery);