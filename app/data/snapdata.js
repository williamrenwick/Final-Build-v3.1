var directory = 'img/snap/';

var images = {
	headerfade: directory + 'mainfade.jpg',
	header: directory + 'main.jpg',
	overview: directory + '1.jpg',
	brief1: directory + '2.jpg',
	brief2: directory + '3.jpg',
	section3: directory + '4.jpg',
	arrayForPreload: function() {
		var self = this;

		return [
			self.headerfade,
			self.header,
			self.overview,
			self.brief1,
			self.brief2,
			self.section3
		]
	}
}


var brief = 'I wanted to create a game that brings the simple pleasures of the popular childhood card game into the 21st century. A throwback to times when playing games with people in the same room was the norm.'
var solution = "The aim of the game is to hit each circle as it's colour changes to match the backgrounds; the player who gets the highest hit ratio wins the game. If you want to up the ante you can increase the number of circles and if that's still not enough, try and hit them when they're moving!"

var text = {
	title: 'Snap',
	client: 'Personal',
	fields: 'Concept, UX, Design',
	brief: brief,
	solution: solution
}

module.exports = {
	images: images,
	text: text
}