var ResizeActions = require('../actions/ResizeActions.js');

var $window = $(window);


function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var resizeFn = debounce(function() {
	var windowW = $window.width();
	var windowH = $window.height();

	ResizeActions.updateWidth(windowW);
	ResizeActions.updateHeight(windowH);
	
	if (windowW > 1024) {
		ResizeActions.isDesktop(true);
		ResizeActions.isTablet(false);
		ResizeActions.isMobile(false);
	} else if (windowW <= 1024 && windowW > 768) {
		ResizeActions.isDesktop(false);
		ResizeActions.isTablet(true);
		ResizeActions.isMobile(false);
	} else if (windowW <= 768) {
		ResizeActions.isDesktop(false);
		ResizeActions.isTablet(false);
		ResizeActions.isMobile(true);
	}

}, 100);


var init = function() {
	resizeFn();
	$window.on('resize', resizeFn);
}


module.exports = {
	init: init
};