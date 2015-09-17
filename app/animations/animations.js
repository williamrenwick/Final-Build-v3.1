var PanelSnap = require('../vendor/jquery.panelSnap.js');

var $body = $('body');
var panelOptions = {
  panelSelector: 'section',
  onSnapStart: function(){
  },
  onSnapFinish: function(){
  },
  onActivate: function(){
  	var $hpItems = $('.hp-work-item');

  	$hpItems.each(function() {
  		var checkStatus = $(this).hasClass('active');

  		if (!checkStatus) {
  			$(this).find('.worktext-appear-wrap').removeClass('worktext-fade-in');
  		}
  	});

  	
  },
  directionThreshold: 0,
  slideSpeed: 200,
  delay: 50
};	
var hasEnabled = false;


function enable() {	
	if (hasEnabled) {
		$body.panelSnap('enable');
	} else {
		$body.panelSnap(panelOptions);
	}
};
function disable() {
	$body.panelSnap('disable');
}


module.exports = {
	init: function() {
		enable();	

		if(hasEnabled == false) {
			hasEnabled = true;
		}
	},
	destroy: function() {
		disable();
	}
}