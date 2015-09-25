var PROJECTS = require('../data/projects.js');

function Color(colourString) {
    this.colourString = colourString,
    this.getDigits = function() {
        var self = this,
            matches = self.colourString.match(/(\d+), (\d+), (\d+)/);

        return matches
    },
    this.red = function() {
        var self = this,
            numbers = self.getDigits(),
            redNumber = Number(numbers[1]);

        return redNumber
    },
    this.green = function() {
        var self = this,
            numbers = self.getDigits(),
            greenNumber = Number(numbers[2]);

        return greenNumber
    },
    this.blue = function() {
        var self = this,
            numbers = self.getDigits(),
            greenNumber = Number(numbers[3]);

        return greenNumber
    }

}

function changeItemBg(scrollPos) {
	var animationBeginPos = 0,
		animationEndPos = $(document).height(),
		beginningColor = new Color('rgb(197, 240, 247)'),
		endingColor = new Color('rgb(167, 201, 224)');


	if (scrollPos >= animationBeginPos && scrollPos <= animationEndPos ) { 
		var percentScrolled = scrollPos / ( animationEndPos - animationBeginPos );
        var newRed = Math.round(beginningColor.red() + ( ( endingColor.red() - beginningColor.red() ) * percentScrolled ));
        var newGreen = Math.round(beginningColor.green() + ( ( endingColor.green() - beginningColor.green() ) * percentScrolled ));
        var newBlue = Math.round(beginningColor.blue() + ( ( endingColor.blue() - beginningColor.blue() ) * percentScrolled ));
        var newColor = 'rgb(' + newRed + ', ' + newGreen +', ' + newBlue + ')';

        
        return newColor

	} else if ( scrollPos > animationEndPos ) {
		return endingColor.colourString
    } else if ( scrollPos < animationBeginPos ) {
        return beginningColor.colourString
    }
};


module.exports = {
    workInfoBg: changeItemBg
}