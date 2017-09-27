$( document ).ready(function() {
	// sidebar expand/collapsed
	$('.btn-expand-collapse').click(function(e) {
		$('.navbar-primary').toggleClass('collapsed');
		$(this).toggleClass('collapsedBtn');
		if($(this).hasClass('collapsedBtn')) {
			$(this).children('span').text('EXPAND');
			$(this).find('.fa').toggleClass('fa-angle-left fa-angle-right');
		} else {
			$(this).children('span').text('COLLAPSE');
			$(this).find('.fa').toggleClass('fa-angle-right fa-angle-left');
		}
	});

	// On hover-actions
	$('.menu-option').mouseover(function() {
		if($(this).children().hasClass('sub-menu')) {
			$(this).children('.sub-menu').show();
			if($(this).closest('.navbar-primary').hasClass('collapsed')) {
				$('.navbar-primary-menu-footer').show();
				$('.submenu-expand-footer').hide();
			} else {
				$('.navbar-primary-menu-footer').hide();
				$('.submenu-expand-footer').show();
			}
		}
		}).mouseout(function() {
    	$(this).children('.sub-menu').hide();
    	$('.navbar-primary-menu-footer').show();
		$('.submenu-expand-footer').hide();
	});
});