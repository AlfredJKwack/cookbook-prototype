
$(document).ready(function() {
	
	$('.left-menu').click(function() {
		if ($('body').hasClass('is--pushed-left')){$('body').toggleClass('is--pushed-left')}
		$('body').toggleClass('is--pushed-right');
		$('article #abstract .trigger').toggleClass('is--hidden');
		$('#article_list').toggleClass('is--revealed');
	});
	$('.right-menu').click(function() {
		if ($('body').hasClass('is--pushed-right')){$('body').toggleClass('is--pushed-right')}
		$('body').toggleClass('is--pushed-left');
	});
	$('.focuspoint').focusPoint();
}); 
