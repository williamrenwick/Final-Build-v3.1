var ScrollActions = require('../actions/scrollActions.js');
var debounce = require('lodash.debounce');

var $window = $(window);

var scrollFn = debounce(function() {
	var scrollPos = $window.scrollTop();
	ScrollActions.scrollPosUpdate(scrollPos);
}, 0);

var init = function() {
	update();
	$window.on('scroll', scrollFn);
}

var update = function() {
	scrollFn();
}

var destroy = function() {
	$window.off('scroll', scrollFn);
}


module.exports = {
	init: init,
	update: update,
	destroy: destroy
};