var directory = 'img/breadmaker/';

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
/*var video = {
	section3: 'https://www.youtube.com/watch?v=jmd2Dkm4JYk'
}*/


var brief = 'At Catalysis we were asked by Panasonic to create a campaign that would re-engage customers with their breadmaker products that had been on sale for 20 years. Already a market leader by a large margin, we decided that we needed to remind customers how good it feels to make things by hand, at home.'
var solution = 'We only had a day to create the brand and the web design for the pitch document but had dicussed what we wanted to do - the campaign would link from peoples social media so that they could easily show off their homemade designs using just a hashtag. Our website would then moderate and aggregate the results right into the page.'

var text = {
	title: 'The Makers',
	client: 'Panasonic',
	fields: 'Concept, Design, UX',
	brief: brief,
	solution: solution
}

module.exports = {
	images: images,
	text: text
}