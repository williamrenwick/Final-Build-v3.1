var directory = 'img/summit/';

var images = {
	headerfade: directory + 'maindfade.jpg',
	header: directory + 'maind.jpg',
	overview: directory + '1.jpg',
	brief1: directory + '2.jpg',
	brief2: directory + '3.jpg',
	section3: directory + '4.jpg',
	arrayForPreload: function() {
		var self = this;

		return [
			self.headerfade
		]
	}
}


var brief = "At the start of 2014 the team in London were tasked with creating an app that would take the company forward and announce us to the digital world as a quality application production company."
var solution = "We began by looking at recent trends within the market and quickly found a niche for a well developed and highly social app that users could use to challenge their friends on Facebook or Google. They can choose from a list of predetermined challenges or set their own, inculding milestones, forfeits and trophies. Points are gained from completing challenges and are lost by accepting challenges and not seeing them through. "

var text = {
	title: 'Summit',
	client: 'Innocellence',
	fields: 'Concept, UX, Design',
	brief: brief,
	solution: solution
}

module.exports = {
	images: images,
	text: text
}