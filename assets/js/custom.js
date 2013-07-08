/* Isotope */
$(function($){
	var $container = $('#portfolio-section');

	if($container.length) {
		$container.isotope({
			itemSelector : '.box',
			layout : 'fitRows'
		});

		$('#filters a').click(function(){
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });
			$(this).removeClass('active').addClass('active').siblings().removeClass('active all');

			return false;
		},null,true);
			
	}});

/* Tooltip */
$('[rel=tooltip]').tooltip();