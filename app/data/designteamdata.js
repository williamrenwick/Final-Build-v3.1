var directory = 'img/designteam/';

var images = {
	headerfade: directory + 'mainfade.jpg',
	header: directory + 'main.jpg',
	overview: directory + '1.jpg',
	brief1: directory + '2.gif',
	brief2: directory + '3.jpg',
	section3: directory + '4.gif',
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


var brief = "Whilst working at Catalysis, it quickly became clear that the account teams had little idea of each of the studio's talents. Our challenge was to create something that would give them and idea of what each of us specialised in, without being too confusing."
var solution = "We decided to create a digital versions of 'Top Trumps' as it was something everyone would be familiar with and allows us to explain the areas of expertise each of us had. I designed and created animated playing card faces for us using SVGs and CSS animations to ensure they worked efficiently and smoothly on all modern browsers."

var text = {
	title: 'Design Team',
	client: 'Catalysis',
	fields: 'Concept, UX, Design',
	brief: brief,
	solution: solution
}

module.exports = {
	images: images,
	text: text
}