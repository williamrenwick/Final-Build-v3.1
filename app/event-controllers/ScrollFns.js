var ScrollActions = require('../actions/scrollActions.js');

var $window = $(window);

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, 
			args = arguments;

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

var timer = null;

function scrollStopListener() {
	if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
    	console.log('scrollStopped')
        ScrollActions.isScrolling(false) 
    }, 150);
}

var scrollFn = debounce(function() {
	var scrollPos = $window.scrollTop();

	ScrollActions.scrollPosUpdate(scrollPos);
	ScrollActions.isScrolling(true)
	scrollStopListener(); 
}, 0);

var init = function() {
	update();
	$window.on({
		scroll: scrollFn
	});
}

var update = function() {
	scrollFn();

	console.log('scrollPos update')
}

var destroy = function() {
	$window.off('scroll', scrollFn);
}


module.exports = {
	init: init,
	update: update,
	destroy: destroy
};