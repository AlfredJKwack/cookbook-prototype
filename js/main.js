
$(document).ready(function() {
	
	// Create side panels
	$('#left-menu').sidr({
		name: 'menu-left',
		side: 'left' // By default
	});
	$('#right-menu').sidr({
		name: 'menu-right',
		side: 'right',
		body: 'body, .main aside'
	});
	
	// Close all side panels on resize
	window.onresize = function(){
		jQuery.sidr('close', 'menu-left');
		jQuery.sidr('close', 'menu-right');
	}
}); 
