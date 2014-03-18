(function($)
{
	$(".nav_button").on('click', function() 
	{
		var target = $($(this).data()['target'])
			$('html, body').stop().animate({
		        'scrollTop': target.offset().top
		    }, 900, 'swing', function () {});
	});

})(jQuery);


