function calcFocus(cropSize, imgSize) {
	//converting a topLeft origin with box coordinate axis to a center based coordinate one.
	var focusPt = {
		x: (cropSize.x + (cropSize.width/2))-(imgSize.w/2),
		y: (imgSize.h/2) - (cropSize.y + (cropSize.height/2))		
	};
	return focusPt;
}

$(document).ready(function() {
	
	// menu handling
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
	
	// crop and size the featured image
	$('<img />').one('load', function() {
		
		//'this' references to the newly created image
		var imgData = {
			w: this.width,
			h: this.height			
		};
		
		// get an appropriate crop window
		var cropData = SmartCrop.crop(this, {
				width: 250,		// keeping this slightly smaller than min-height
				height: 250,
				minScale: 0.9
			}, function(result) {
				return result;
			}
		);
		
		// get a focus point
		var focusPoint = calcFocus(cropData.topCrop, imgData);
		
		$('div.featured-img.focuspoint').attr({
			"data-focus-x": focusPoint.x,
			"data-focus-y": focusPoint.y,
			"data-focus-w": imgData.w,
			"data-focus-h": imgData.h
		});
		
		//set the focus point
		$('.focuspoint').focusPoint();
		
	}).attr('src', $('div.featured-img.focuspoint img')[0].src);	
	
}); 

